using System;
using Amazon.DynamoDBv2.DataModel;

namespace DynamodbWebApi.models
{
 [DynamoDBTable("test_readers")]
    public class Reader
    {
        [DynamoDBProperty("id")]
        [DynamoDBHashKey]
        public Guid Id { get; set; }

        [DynamoDBProperty("name")]
        public string Name { get; set; }

        [DynamoDBProperty("emailAddress")]
        public string EmailAddress { get; set; }

        [DynamoDBProperty("userName")]
        public string Username { get; set; }

        [DynamoDBProperty("addedOn")]
        public DateTime AddedOn { get; set; }
    }
}
