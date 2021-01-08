using GoogleSniffer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleSniffer
{
    public class Escuela : Entity
    {
        public virtual GeoMarker GeoMarker { get; set; }
        public bool EsPublico { get; set; }
        public bool EsUrbano { get; set; }
        public string Provincia { get; set; }
        public string Departamento { get; set; }
        public string Nombre { get; set; }
        public string Domicilio { get; set; }
        public string Email { get; set; }
        public bool EdComun { get; set; }
        public bool EdEspecial { get; set; }
        public bool EdJovenesAdultos { get; set; }
        public bool EdArtistica { get; set; }
        public bool Inicial { get; set; }
        public bool Primaria { get; set; }
        public bool Secundaria { get; set; }
        public bool Tecnica { get; set; }

    }
}
