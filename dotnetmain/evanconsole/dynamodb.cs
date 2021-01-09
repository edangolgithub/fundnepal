using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;

namespace evanconsole
{
    #region createtable
    public partial class dynamodb
    {
        public static void run_create_dynamodb()
        {
            CreatingTable_async(movies_table_name, movie_items_attributes, movies_key_schema, movies_table_provisioned_throughput).Wait();
        }
        private static AmazonDynamoDBClient Client = new AmazonDynamoDBClient("AKIA6KQNDOE6HZLELDPC", "oq9AaLwUyz6RwIG/KG90MHGt2KJJ84Pq3DkGjwXE");
        public static async Task CreatingTable_async(string new_table_name,
                                List<AttributeDefinition> table_attributes,
                                List<KeySchemaElement> table_key_schema,
                                ProvisionedThroughput provisionedThroughput)
        {
            Console.WriteLine("  -- Creating a new table named {0}...", new_table_name);
            if (await checkingTableExistence_async(new_table_name))
            {
                Console.WriteLine("     -- No need to create a new table...");
                return;
            }
            if (operationFailed)
                return;

            operationSucceeded = false;
            Task<bool> newTbl = CreateNewTable_async(new_table_name,
                                                      table_attributes,
                                                      table_key_schema,
                                                      provisionedThroughput);
            await newTbl;
        }


        /*--------------------------------------------------------------------------
         *                      checkingTableExistence_async
         *--------------------------------------------------------------------------*/
        static async Task<bool> checkingTableExistence_async(string tblNm)
        {
            DescribeTableResponse descResponse;

            operationSucceeded = false;
            operationFailed = false;
            ListTablesResponse tblResponse = await Client.ListTablesAsync();
            if (tblResponse.TableNames.Contains(tblNm))
            {
                Console.WriteLine("     A table named {0} already exists in DynamoDB!", tblNm);

                // If the table exists, get its description
                try
                {
                    descResponse = await Client.DescribeTableAsync(movies_table_name);
                    operationSucceeded = true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine("     However, its description is not available ({0})", ex.Message);
                    moviesTableDescription = null;
                    operationFailed = true;
                    return (true);
                }
                moviesTableDescription = descResponse.Table;
                return (true);
            }
            return (false);
        }


        /*--------------------------------------------------------------------------
         *                CreateNewTable_async
         *--------------------------------------------------------------------------*/
        public static async Task<bool> CreateNewTable_async(string table_name,
                                                             List<AttributeDefinition> table_attributes,
                                                             List<KeySchemaElement> table_key_schema,
                                                             ProvisionedThroughput provisioned_throughput)
        {
            CreateTableRequest request;
            CreateTableResponse response;

            // Build the 'CreateTableRequest' structure for the new table
            request = new CreateTableRequest
            {
                TableName = table_name,
                AttributeDefinitions = table_attributes,
                KeySchema = table_key_schema,
                // Provisioned-throughput settings are always required,
                // although the local test version of DynamoDB ignores them.
                ProvisionedThroughput = provisioned_throughput
            };

            operationSucceeded = false;
            operationFailed = false;
            try
            {
                Task<CreateTableResponse> makeTbl = Client.CreateTableAsync(request);
                response = await makeTbl;
                Console.WriteLine("     -- Created the \"{0}\" table successfully!", table_name);
                operationSucceeded = true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("     FAILED to create the new table, because: {0}.", ex.Message);
                operationFailed = true;
                return (false);
            }

            // Report the status of the new table...
            Console.WriteLine("     Status of the new table: '{0}'.", response.TableDescription.TableStatus);
            moviesTableDescription = response.TableDescription;
            return (true);
        }
        static bool pause()
        {
            if (operationFailed)
                Console.WriteLine("     Operation failed...");
            else if (operationSucceeded)
                Console.WriteLine("     Completed that step successfully!");
            Console.WriteLine("      ...Press [Esc] to exit, or any other key to continue");
            ConsoleKeyInfo keyInf = Console.ReadKey();
            Console.WriteLine();
            return (keyInf.Key != ConsoleKey.Escape);

        }

    }
    #endregion

    #region inserttable
    public partial class dynamodb
    {
        public static void loadtable()
        {
            try { 
                moviesTable = Table.LoadTable(Client, movies_table_name);
                }
            catch (Exception ex)
            {
                operationFailed = true;
                Console.WriteLine(
                  " Error: Could not access the new '{0}' table after creating it;\n" +
                  "        Reason: {1}.", movies_table_name, ex.Message);
                pause();

            }
        }
    }
    #endregion
}


