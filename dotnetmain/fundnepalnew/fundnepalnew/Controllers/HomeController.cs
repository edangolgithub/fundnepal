using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace fundnepalnew
{
    public class HomeController : Controller
    {
        [Authorize]
       
        [Route("home/index")]
        public IActionResult Index()
        {
            
            return View("Home");
        }
    }


}