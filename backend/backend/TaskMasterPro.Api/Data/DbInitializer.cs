using TaskMasterPro.Api.Models;

namespace TaskMasterPro.Api.Data
{
    public static class DbInitializer
    {
        public static void Seed(AppDbContext context)
        {
            if (context.Tasks.Any()) return;

            context.Tasks.AddRange(
                new TaskItem { Title = "Build portfolio", Priority = 1, DueDate = DateTime.Now.AddDays(2) },
                new TaskItem { Title = "Apply to jobs", Priority = 2, DueDate = DateTime.Now.AddDays(5) }
            );

            context.SaveChanges();
        }
    }
}
