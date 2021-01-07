using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace readerapi.Controllers
{
    [Route("api/[controller]")]

public class ReadersController : ControllerBase
    {
        
        private IReadersRepository _repository;

        public ReadersController(IReadersRepository repository)
        {
            _repository = repository;
        }

        /* View Endpoints */

        // GET: ReadersController
        public async Task<ActionResult> Index(
            string userName = "")
        {
        }

        [HttpGet]
        [Route("Create")]
        public IActionResult Create()
        {
        }

        [HttpPost]
        [Route("Create")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(
            ReaderInputModel model)
        {
        }

        [HttpGet]
        [Route("Edit/{readerId}")]
        public async Task<ActionResult> Edit(
            Guid readerId) 
        {
        }

        // POST: ReadersController/Edit/5
        [HttpPost]
        [Route("Edit/{readerId}")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit(Guid readerId, 
            ReaderInputModel model)
        {
        }

        [HttpGet]
        [Route("Delete/{readerId}")]
        public async Task<ActionResult> Delete(
            Guid readerId)
        {
        }
    }
