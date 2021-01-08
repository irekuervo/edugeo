using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleSniffer.Entities
{
    public class EdugeoModel : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"server=.;database=Edugeo;user=edugeo;password=123456");
        }

        public DbSet<GeoMarker> GeoMarkers { get; set; }
        public DbSet<Escuela> Escuelas { get; set; }
    }
}
