namespace Backend.Models.Entities
{
    public class Todo
    {
        public Guid Id { get; set; }
        public required string Text { get; set; }
    }
}