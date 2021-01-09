
/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
using System;
using System.Collections.Generic;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Runtime;

namespace evanconsole
{
    class HighLevelItemCRUD
    {
        private static AmazonDynamoDBClient client = new AmazonDynamoDBClient("AKIA6KQNDOE6HZLELDPC","oq9AaLwUyz6RwIG/KG90MHGt2KJJ84Pq3DkGjwXE");

        public static void runtest()
        {
            try
            {
                DynamoDBContext context = new DynamoDBContext(client);
                TestCRUDOperations(context);
                Console.WriteLine("To continue, press Enter");
                Console.ReadLine();
            }
            catch (AmazonDynamoDBException e) { Console.WriteLine(e.Message); }
            catch (AmazonServiceException e) { Console.WriteLine(e.Message); }
            catch (Exception e) { Console.WriteLine(e.Message); }
        }

        private async static void TestCRUDOperations(DynamoDBContext context)
        {
            int bookID = 1001; // Some unique value.
            Book myBook = new Book
            {
                Id = bookID,
                Title = "object persistence-AWS SDK for.NET SDK-Book 1001",
                ISBN = "111-1111111001",
                BookAuthors = new List<string> { "Author 1", "Author 2" },
            };

            // Save the book.
            await context.SaveAsync<Book>(myBook);
            // Retrieve the book.
            Book bookRetrieved = await context.LoadAsync<Book>(bookID);

            // Update few properties.
            bookRetrieved.ISBN = "222-2222221001";
            bookRetrieved.BookAuthors = new List<string> { " Author 1", "Author x" }; // Replace existing authors list with this.
            await context.SaveAsync<Book>(bookRetrieved);

            // Retrieve the updated book. This time add the optional ConsistentRead parameter using DynamoDBContextConfig object.
            Book updatedBook = await context.LoadAsync<Book>(bookID, new DynamoDBContextConfig
            {
                ConsistentRead = true
            });

            // Delete the book.
            await context.DeleteAsync<Book>(bookID);
            // Try to retrieve deleted book. It should return null.
            Book deletedBook = await context.LoadAsync<Book>(bookID, new DynamoDBContextConfig
            {
                ConsistentRead = true
            });
            if (deletedBook == null)
                Console.WriteLine("Book is deleted");
        }
    }

    [DynamoDBTable("ProductCatalog")]
    public class Book
    {
        [DynamoDBHashKey] //Partition key
        public int Id
        {
            get; set;
        }
        [DynamoDBProperty]
        public string Title
        {
            get; set;
        }
        [DynamoDBProperty]
        public string ISBN
        {
            get; set;
        }
        [DynamoDBProperty("Authors")] //String Set datatype
        public List<string> BookAuthors
        {
            get; set;
        }
    }
}
