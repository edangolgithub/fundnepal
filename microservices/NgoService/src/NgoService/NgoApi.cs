using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace NgoService
{
    public interface IProjectsRepository
    {
        Task<IEnumerable<Project>> All();
        Task Add(Project entity);
        Task Delete(string id);
        Task Update(Project entity);
    }
    public class ProjectsRepository : IProjectsRepository
    {
        private readonly AmazonDynamoDBClient _client;
        private readonly DynamoDBContext _context;

        public ProjectsRepository()
        {
            _client = new AmazonDynamoDBClient();
            _context = new DynamoDBContext(_client);
        }

        public async Task Add(Project entity)
        {
            entity.ProjectId = Guid.NewGuid().ToString();
            entity.approvedDate = DateTime.Now.ToLongDateString();
            await _context.SaveAsync<Project>(entity);
        }

        public async Task<IEnumerable<Project>> All()
        {

            var table = _context.GetTargetTable<Project>();
            var scanConditions = new List<ScanCondition>() { new ScanCondition("ProjectId", ScanOperator.IsNotNull) };
            var searchResults = _context.ScanAsync<Project>(scanConditions, null);
            return (IEnumerable<Project>)await searchResults.GetNextSetAsync();
        }

        public async Task Delete(string id)
        {
            await _context.DeleteAsync<Project>(id);
        }

        public async Task Update(Project entity)
        {
            await _context.SaveAsync<Project>(entity);
        }
    }
}