using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DynamodbWebApi.models;
using DynamodbWebApi.service;
using Microsoft.AspNetCore.Mvc;

namespace DynamodbWebApi.Controllers
{
    public class ReadersController:ControllerBase
    {
        private IReadersRepository _repository;

        public ReadersController(IReadersRepository repository)
        {
            _repository = repository;
        }

        // GET: ReadersController
         [HttpGet]
        public async Task<IEnumerable<string>> Index(string userName = "")
        {
            if (!string.IsNullOrEmpty(userName))
            {
                var readers = await _repository.Find(new SearchRequest { UserName = userName });
                 return new string[] { "value1", "value2" };
            }
            else
            {
                var readers = await _repository.All();
                return new string[] { "value1", "value2" };
            }
        }

       /*  [HttpGet]
        [Route("Create")]
        public IActionResult Create()
        {
            return View("~/Views/Readers/CreateOrUpdate.cshtml");
        } */

        // POST: ReadersController/Create
        // [HttpPost]
        // [Route("Create")]
        // [ValidateAntiForgeryToken]
        // public async Task<ActionResult> Create(ReaderInputModel model)
        // {
        //     try
        //     {
        //         if (!ModelState.IsValid)
        //             return View("~/Views/Readers/CreateOrUpdate.cshtml", model);

        //         await _repository.Add(model);

        //         return RedirectToAction(nameof(Index));
        //     }
        //     catch
        //     {
        //         return View("~/Views/Readers/CreateOrUpdate.cshtml", model);
        //     }
        // }

        // [HttpGet]
        // [Route("Edit/{readerId}")]
        // public async Task<ActionResult> Edit(Guid readerId)
        // {
        //     var reader = await _repository.Single(readerId);

        //     ViewBag.ReaderId = readerId;

        //     return View("~/Views/Readers/CreateOrUpdate.cshtml", new ReaderInputModel
        //     {
        //         EmailAddress = reader.EmailAddress,
        //         Name = reader.Name,
        //         Username = reader.Username,
        //         InputType = InputType.Update
        //     });
        // }

        // POST: ReadersController/Edit/5
        // [HttpPost]
        // [Route("Edit/{readerId}")]
        // [ValidateAntiForgeryToken]
        // public async Task<ActionResult> Edit(Guid readerId, ReaderInputModel model)
        // {
        //     try
        //     {
        //         if (!ModelState.IsValid)
        //             return View("~/Views/Readers/CreateOrUpdate.cshtml", model);

        //         await _repository.Update(readerId, model);

        //         return RedirectToAction(nameof(Index));
        //     }
        //     catch
        //     {
        //         return View("~/Views/Readers/CreateOrUpdate.cshtml", model);
        //     }
        // }

        // [HttpGet]
        // [Route("Delete/{readerId}")]
        // public async Task<ActionResult> Delete(Guid readerId)
        // {
        //     await _repository.Remove(readerId);

        //     return RedirectToAction(nameof(Index));
        // }
    }
    
}
