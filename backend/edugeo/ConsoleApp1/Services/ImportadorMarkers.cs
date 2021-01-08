using GoogleSniffer.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleSniffer.Services
{
    public class ImportadorMarkers
    {
        public ImportadorMarkers()
        {
            GoogleMaps maps = new GoogleMaps();

            var model = new EdugeoModel();

            foreach (var escuela in model.Escuelas.OrderBy(i => i.Id).Include(i => i.GeoMarker).ToList())
            {

                Console.Write(escuela.Nombre + " - " + escuela.Domicilio + " - ");

                try
                {
                    if (escuela.GeoMarker == null)
                    {
                        var geocode = maps.GetGeocode("CALLE " + escuela.Domicilio);
                        if (geocode != null && geocode.Results != null && geocode.Results.Count() > 0)
                        {
                            var result = geocode.Results.First();

                            GeoMarker marker = new GeoMarker();
                            marker.DireccionFormateada = result.FormattedAddress;
                            marker.Latitud = result.Geometry.Location.Latitude;
                            marker.Longitud = result.Geometry.Location.Longitude;
                            escuela.GeoMarker = marker;

                            model.SaveChanges();
                            Console.WriteLine(marker.DireccionFormateada);
                        }
                        else
                        {
                            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(geocode));
                        }
                    }
                    else { Console.WriteLine("Ya tiene marker"); }
                    System.Threading.Thread.Sleep(100);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
        }
    }
}
