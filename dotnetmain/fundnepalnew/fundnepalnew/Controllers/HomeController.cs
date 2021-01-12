using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace fundnepalnew
{
 [Route("home")]

    public class HomeController : Controller
    {
        [Authorize]
       
               public IActionResult Index()
        {
            
            return View("Home");
        }
        
        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }


}