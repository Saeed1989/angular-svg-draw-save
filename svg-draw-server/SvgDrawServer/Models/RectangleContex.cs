using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace SvgDrawServer.Models
{
    public class RectangleContext : DbContext
    {
        public RectangleContext(DbContextOptions<RectangleContext> options)
            : base(options)
        {
        }

        public DbSet<Rectangle> RectangleOption { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Rectangle>().HasData(
                new Rectangle
                {
                    Id = 101,
                    Name = "sampleName",
                    OriginX= 100,
                    OriginY= 100,
                    Width= 100,
                    Height= 100,
                    StrokeColor= "black",
                    FillColor= "rgb(231, 231, 231)",
                    StrokeWidth= 1,
                }
            );
        }
    }
}
