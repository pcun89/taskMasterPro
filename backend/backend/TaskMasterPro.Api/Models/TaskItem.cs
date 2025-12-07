using System;

namespace TaskMasterPro.Api.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public int Priority { get; set; } // 1 = High, 2 = Medium, 3 = Low
        public DateTime DueDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}
