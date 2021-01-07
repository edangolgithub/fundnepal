using System;

namespace DynamodbWebApi.service
{
    public interface IReadersRepository
    {
        Task<Reader> Single(Guid readerId);
        Task<ReaderViewModel> All(string paginationToken = "");
        Task<IEnumerable<Reader>> Find(SearchRequest searchReq);
        Task Add(ReaderInputModel entity);
        Task Remove(Guid readerId);
        Task Update(Guid readerId, ReaderInputModel entity);
    }
    public class ReadersRepository : IReadersRepository
    {
        private readonly AmazonDynamoDBClient _client;
        private readonly DynamoDBContext _context;

        public ReadersRepository()
        {
            _client = new AmazonDynamoDBClient();
            _context = new DynamoDBContext(_client);
        }
    }
}
