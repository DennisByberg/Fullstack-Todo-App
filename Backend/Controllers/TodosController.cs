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

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteTodo(Guid id)
        {
            var todo = _dbContext.Todos.Find(id);

            if (todo is null) return NotFound("Cant find a todo with that id");

            _dbContext.Remove(todo);
            _dbContext.SaveChanges();

            return Ok($"Successfully deleted {todo.Text}");
        }
    }
}