using System;
using Microsoft.Extensions.Configuration;

namespace evanconsole
{


    public class Helper
    {
        public static IConfiguration config;
        
        public static IConfiguration getconfig()
        {

            config = new ConfigurationBuilder().AddJsonFile("appsettings.json", true, true).Build();
            return config;
        }
        public static string getAccessId()
        {
          return  $"{config["AWS:id"]}";
        }
         public static string getSecret()
        {
          return  $"{config["AWS:secret"]}";
        }
    }
}
// Console.WriteLine($" Hello { config["name"] } !");
// AmazonDynamoDBConfig configur = new AmazonDynamoDBConfig();
// var dynamoDbConfig = config.GetValue<string>("AWS");
// Console.WriteLine($"{config["AWS:profile"]}");