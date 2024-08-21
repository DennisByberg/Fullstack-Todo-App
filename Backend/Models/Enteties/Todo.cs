namespace Backend.Models.Enteties
{
    public class Todo
    {
        public Guid Id { get; set; }
        public required string Text { get; set; }
    }
}