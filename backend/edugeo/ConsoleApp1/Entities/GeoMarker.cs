using GoogleSniffer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleSniffer
{
    public class GeoMarker : Entity
    {
        public double Latitud { get; set; }
        public double Longitud { get; set; }
        public string DireccionFormateada { get; set; }
    }
}
