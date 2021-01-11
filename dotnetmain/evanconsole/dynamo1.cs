using System;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Microsoft.Extensions.Configuration;

namespace evanconsole
{
    public class dynamo1
    {
        static IConfiguration config;
        public void getappsettings()
        {
            config = Helper.getconfig();

            Task.Run(() => gettables()).Wait();

        }
        public static async Task<ListTablesResponse> gettables()
        {


            AmazonDynamoDBClient client = new AmazonDynamoDBClient(Helper.getAccessId(), Helper.getSecret());
            var tblResponse = await client.ListTablesAsync();

            foreach (var item in tblResponse.TableNames)
            {
                Console.WriteLine(item);
            }
            return tblResponse;
        }

    }
}