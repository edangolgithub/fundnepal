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
        public async Task<IEnumerable<Project>> Get()
        {
            return await _repository.All();
        }

        [HttpPost]
        public async Task Post([FromBody]Project model)
        {
           if(model==null)
           {
               return;
           }
            await _repository.Add(model);
        }
        [HttpPut]
        public async Task PutAsync([FromBody] Project entity)
        {
             await _repository.Update(entity);
        }
        [HttpDelete("{id}")]
        public async Task DeleteAsync(string id)
        {
            await _repository.Delete(id);
        }


    }
}
