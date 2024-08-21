using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore; // Entity Framework Core functionalities

namespace Backend.Data
{
    // Defining the ApplicationDbContext class which inherits from DbContext
    public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
    {
        // This will allow CRUD operations on the 'Todos' table in the database
        public DbSet<Todo> Todos { get; set; }
    }
}