using System;
using Microsoft.AspNetCore.Mvc;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using System.Collections.Generic;

using System.Threading.Tasks;
using System.Text.Json;
using Amazon.DynamoDBv2.DataModel;

namespace readerapi.Controllers
{

    [Route("api/[controller]")]
    public class DynoController : ControllerBase
    {
        private readonly IAmazonDynamoDB dbclient;

        public DynoController(IAmazonDynamoDB _dbclient)
        {
            dbclient = _dbclient;
        }
        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(string Id = "1")
        {

            Table people = Table.LoadTable(dbclient, "person");
            var person = JsonSerializer.Deserialize<person>((await people.GetItemAsync(Id)).ToJson());
            return Ok(person);
        }
        [HttpGet]
        public async Task<IEnumerable<person>> Get()
        {
            DynamoDBContext _context = new DynamoDBContext(dbclient);
            return await _context.ScanAsync<person>
                         (new List<ScanCondition>()).GetRemainingAsync();
        }

    }
    public class person
    {
        public string Id { get; set; }
        public string name { get; set; }

    }
}






