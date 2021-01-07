using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace usermicroservice.Controllers
{

    [Route("/home")]
    public class HomeController : Controller
    {
       // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "ok", "evan" };
        }
    }
}