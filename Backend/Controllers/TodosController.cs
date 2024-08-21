using Backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController(ApplicationDbContext dbContext) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllTodos()
        {
            return Ok(dbContext.Todos.ToList());
        }
    }
}
