using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Microsoft.AspNetCore.Mvc;

namespace CommentsAPI.Controllers
{
    [Route("getcomments")]
    [ApiController]
    public class CommentsController
    {
        private const string TableName = "commentsTable";
        private readonly IAmazonDynamoDB _amazonDynamoDb;
        public CommentsController(IAmazonDynamoDB amazonDynammoDb)
        {
            _amazonDynamoDb = amazonDynammoDb;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(int id)
        {
            var request = new GetItemRequest
            {
                TableName = TableName,
                Key = new Dictionary<string, AttributeValue>
    {
     {
      "id",
      new AttributeValue
      {
        S = id.ToString()
      }
     }
    }
            };
            var response = await _amazonDynamoDb.GetItemAsync(request);
            return response.Item["username"].S;
        }



    }
}
