using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
//using SpyStore.Models.Entities;

namespace SpyStore.DAL.EF
{
    public class StoreContext : DbContext
    {
        public StoreContext()
        {
        }

        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder contextOptionsBuilder)
        {
            var connectionString = @"Server=(localdb)\mssqllocaldb;Database=SpyStore;Trusted_Connection=True;MultipleActiveResultSets=true;";

            if (!contextOptionsBuilder.IsConfigured)
            {
                contextOptionsBuilder.UseSqlServer(connectionString, options => options.ExecutionStrategy(c => new MyExecutionStrategy(c)));
            }
        }
    }
}
