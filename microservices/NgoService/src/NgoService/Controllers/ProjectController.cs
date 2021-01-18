using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NgoService;
namespace NgoService.Controllers
{
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private IProjectsRepository _repository;

        public ProjectController(IProjectsRepository repository)
        {
            _repository = repository;
        }
        public async Task<IEnumerable<Organization>> Get()
        {
            return await _repository.GetAllOrganization();
        }

        [HttpPost]
        public async Task Post([FromBody] Organization model)
        {
           if(model==null)
           {
               return;
           }
            await _repository.AddOrganization(model);
        }
        [HttpPut]
        public async Task PutAsync([FromBody] Organization entity)
        {
             await _repository.UpdateOrganization(entity);
        }
        [HttpDelete("{id}")]
        public async Task DeleteAsync(string id)
        {
            await _repository.DeleteOrganization(id);
        }


    }
}
