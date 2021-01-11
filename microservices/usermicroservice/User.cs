using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace usermicroservice
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Profile { get; set; }
        public DateTime CreatedTimestamp { get; set; }
        public string Token { get; set; }
        public string Access { get; set; }
    }
}
