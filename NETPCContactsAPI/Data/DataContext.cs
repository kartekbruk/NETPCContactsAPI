using Microsoft.EntityFrameworkCore;
using NETPCContactsAPI.Models;

namespace NETPCContactsAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> Subcategories { get; set; }
        public DbSet<Contact> Contacts { get; set; }
    }
}
