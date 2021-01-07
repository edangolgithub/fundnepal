namespace readerapi
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