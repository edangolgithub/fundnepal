using System;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;

namespace evanconsole
{
    class Program
    {
        public static Table persontable;
        static void Main(string[] args)
        {
            Console.WriteLine(Figgle.FiggleFonts.Standard.Render("Hello, World!"));
            dynamo1();
        }
        public static void run()
        {

        }
        public async static void dynamo1()
        {
            AmazonDynamoDBConfig ddbConfig = new AmazonDynamoDBConfig();
          //  ddbConfig.ServiceURL = "https://dynamodb.us-east-1.amazonaws.com";
            ddbConfig.RegionEndpoint = RegionEndpoint.
            Document pdocument = new Document();
            AmazonDynamoDBClient client = new AmazonDynamoDBClient(ddbConfig);
            Task<Document> readMovie = persontable.GetItemAsync(1);
            pdocument = await readMovie;
        }

    }
}
