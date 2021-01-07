using Microsoft.EntityFrameworkCore;
using usermicroservice.Models;

namespace usermicroservice
{
    public class BookContext : DbContext
    {
        public BookContext() : base() { }
        public BookContext(DbContextOptions<BookContext> options) : base(options) { }
        public DbSet<Book> Book { get; set; }

        public DbSet<Publisher> Publisher { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("Server=fundnepaldb.cjiabok62vq8.us-east-1.rds.amazonaws.com;port=3306;Database=fundnepaldb;user=root;password=mysqlpassword");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Publisher>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.HasKey(e => e.ISBN);
                entity.Property(e => e.Title).IsRequired();
                entity.HasOne(d => d.Publisher)
            .WithMany(p => p.Books);
            });
        }
    }

    // public partial class RDSContext : DbContext
    // {
    //     public DbSet<Info> Infos { get; set; }

    //     public DbSet<User> Users { get; set; }

    //     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //         => optionsBuilder.UseMySql(Helpers.GetRDSConnectionString());
    // }

}
