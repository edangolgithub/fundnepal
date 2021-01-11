using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;

using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

using Newtonsoft.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace usermicroservice
{
    public class Functions
    {
        // This const is the name of the environment variable that the serverless.template will use to set
        // the name of the DynamoDB table used to store User posts.
        const string TABLENAME_ENVIRONMENT_VARIABLE_LOOKUP = "UserTable";

        public const string ID_QUERY_STRING_NAME = "Id";
        IDynamoDBContext DDBContext { get; set; }

        /// <summary>
        /// Default constructor that Lambda will invoke.
        /// </summary>
        public Functions()
        {
            // Check to see if a table name was passed in through environment variables and if so 
            // add the table mapping.
            var tableName = System.Environment.GetEnvironmentVariable(TABLENAME_ENVIRONMENT_VARIABLE_LOOKUP);
            if(!string.IsNullOrEmpty(tableName))
            {
                AWSConfigsDynamoDB.Context.TypeMappings[typeof(User)] = new Amazon.Util.TypeMapping(typeof(User), tableName);
            }

            var config = new DynamoDBContextConfig { Conversion = DynamoDBEntryConversion.V2 };
            this.DDBContext = new DynamoDBContext(new AmazonDynamoDBClient(), config);
        }

        /// <summary>
        /// Constructor used for testing passing in a preconfigured DynamoDB client.
        /// </summary>
        /// <param name="ddbClient"></param>
        /// <param name="tableName"></param>
        public Functions(IAmazonDynamoDB ddbClient, string tableName)
        {
            if (!string.IsNullOrEmpty(tableName))
            {
                AWSConfigsDynamoDB.Context.TypeMappings[typeof(User)] = new Amazon.Util.TypeMapping(typeof(User), tableName);
            }

            var config = new DynamoDBContextConfig { Conversion = DynamoDBEntryConversion.V2 };
            this.DDBContext = new DynamoDBContext(ddbClient, config);
        }

        /// <summary>
        /// A Lambda function that returns back a page worth of User posts.
        /// </summary>
        /// <param name="request"></param>
        /// <returns>The list of Users</returns>
        public async Task<APIGatewayProxyResponse> GetUsersAsync(APIGatewayProxyRequest request, ILambdaContext context)
        {
            context.Logger.LogLine("Getting Users");
            var search = this.DDBContext.ScanAsync<User>(null);
            var page = await search.GetNextSetAsync();
            context.Logger.LogLine($"Found {page.Count} Users");

            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = JsonConvert.SerializeObject(page),
                Headers = new Dictionary<string, string> 
                {
                     { "Content-Type", "application/json" },
                     {  "Access-Control-Allow-Origin", "*"},
                     {  "Access-Control-Allow-Methods", "OPTIONS,POST,GET,PUT,DELETE"}
                }
            };

            return response;
        }

        /// <summary>
        /// A Lambda function that returns the User identified by UserId
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<APIGatewayProxyResponse> GetUserAsync(APIGatewayProxyRequest request, ILambdaContext context)
        {
            string UserId = null;
            if (request.PathParameters != null && request.PathParameters.ContainsKey(ID_QUERY_STRING_NAME))
                UserId = request.PathParameters[ID_QUERY_STRING_NAME];
            else if (request.QueryStringParameters != null && request.QueryStringParameters.ContainsKey(ID_QUERY_STRING_NAME))
                UserId = request.QueryStringParameters[ID_QUERY_STRING_NAME];

            if (string.IsNullOrEmpty(UserId))
            {
                return new APIGatewayProxyResponse
                {
                    StatusCode = (int)HttpStatusCode.BadRequest,
                    Body = $"Missing required parameter {ID_QUERY_STRING_NAME}"
                };
            }

            context.Logger.LogLine($"Getting User {UserId}");
            var User = await DDBContext.LoadAsync<User>(UserId);
            context.Logger.LogLine($"Found User: {User != null}");

            if (User == null)
            {
                return new APIGatewayProxyResponse
                {
                    StatusCode = (int)HttpStatusCode.NotFound
                };
            }

            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = JsonConvert.SerializeObject(User),
                Headers = new Dictionary<string, string> 
                {
                     { "Content-Type", "application/json" },
                     {  "Access-Control-Allow-Origin", "*"},
                     {  "Access-Control-Allow-Methods", "OPTIONS,POST,GET,PUT,DELETE"}
                }
            };
            return response;
        }

        /// <summary>
        /// A Lambda function that adds a User post.
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<APIGatewayProxyResponse> AddUserAsync(APIGatewayProxyRequest request, ILambdaContext context)
        {
            var User = JsonConvert.DeserializeObject<User>(request?.Body);
            User.Id = Guid.NewGuid().ToString();
            User.CreatedTimestamp = DateTime.Now;

            context.Logger.LogLine($"Saving User with id {User.Id}");
            await DDBContext.SaveAsync<User>(User);

            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = User.Id.ToString(),
                 Headers = new Dictionary<string, string> 
                {
                     { "Content-Type", "application/json" },
                     {  "Access-Control-Allow-Origin", "*"},
                     {  "Access-Control-Allow-Methods", "OPTIONS,POST,GET,PUT,DELETE"}
                }
            };
            return response;
        }

        /// <summary>
        /// A Lambda function that removes a User post from the DynamoDB table.
        /// </summary>
        /// <param name="request"></param>
        public async Task<APIGatewayProxyResponse> RemoveUserAsync(APIGatewayProxyRequest request, ILambdaContext context)
        {
            string UserId = null;
            if (request.PathParameters != null && request.PathParameters.ContainsKey(ID_QUERY_STRING_NAME))
                UserId = request.PathParameters[ID_QUERY_STRING_NAME];
            else if (request.QueryStringParameters != null && request.QueryStringParameters.ContainsKey(ID_QUERY_STRING_NAME))
                UserId = request.QueryStringParameters[ID_QUERY_STRING_NAME];

            if (string.IsNullOrEmpty(UserId))
            {
                return new APIGatewayProxyResponse
                {
                    StatusCode = (int)HttpStatusCode.BadRequest,
                    Body = $"Missing required parameter {ID_QUERY_STRING_NAME}"
                };
            }

            context.Logger.LogLine($"Deleting User with id {UserId}");
            await this.DDBContext.DeleteAsync<User>(UserId);

            return new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK
            };
        }
    }
}
