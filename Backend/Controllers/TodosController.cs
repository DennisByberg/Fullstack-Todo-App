using Backend.Data;
using Backend.Models.Dtos;
using Backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TodosController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        public TodosController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Todo>>> GetAllTodos()
        {
            try
            {
                var todos = await _dbContext.Todos.ToListAsync();
                return Ok(todos);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }

        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<ActionResult<List<Todo>>> DeleteTodo(Guid id)
        {
            try
            {
                var todo = await _dbContext.Todos.FindAsync(id);

                if (todo is null)
                {
                    return NotFound("Can't find a todo with that id");
                }

                _dbContext.Todos.Remove(todo);
                await _dbContext.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public async Task<ActionResult<List<Todo>>> AddTodo(AddTodoDto addTodoDto)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(addTodoDto.Text))
                {
                    return BadRequest("Todo text cannot be empty.");
                }

                var todoEntity = new Todo()
                {
                    Text = addTodoDto.Text,
                };

                await _dbContext.Todos.AddAsync(todoEntity);
                await _dbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetAllTodos), new { id = todoEntity.Id }, todoEntity);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}