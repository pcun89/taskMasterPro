using Microsoft.EntityFrameworkCore;
using TaskMasterPro.Api.Models;

namespace TaskMasterPro.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<TaskItem> Tasks => Set<TaskItem>();
    }
}
