using System;
using System.Collections.Generic;

namespace DynamodbWebApi.models
{
    public enum InputType
    {
        Create,
        Update
    };
    public enum ResultsType
    {
        List,
        Search
    }
 public class ReaderViewModel
    {
        public IEnumerable<Reader> Readers { get; set; }
        public ResultsType ResultsType { get; set; }
        public string PaginationToken { get; set; }
    }
    public class SearchRequest
    {
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string UserName { get; set; }
    }
     public class ReaderInputModel
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string EmailAddress { get; set; }
        public InputType InputType { get; set; }
    }
}
