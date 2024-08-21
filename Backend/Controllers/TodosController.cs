using Backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public TodosController(ApplicationDbContext dbContext) => _dbContext = dbContext;

        [HttpGet]
        public IActionResult GetAllTodos()
        {
            return Ok(_dbContext.Todos.ToList());
        }
    }
}