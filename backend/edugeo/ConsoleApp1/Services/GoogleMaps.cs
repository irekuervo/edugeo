using GoogleApi.Entities.Maps.Geocoding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace GoogleSniffer.Services
{
    public class GoogleMaps
    {
        public GeocodeResponse GetGeocode(string address)
        {
            HttpClient client = new HttpClient();
            string urlAddress = HttpUtility.UrlEncode(address);
            string url = $"https://maps.googleapis.com/maps/api/geocode/json?address="+urlAddress+"&key=AIzaSyDH8Xx4arLVqizaucS1Y6JvXluD0AkdkSM";
            HttpResponseMessage response = client.GetAsync(url).Result;

            GeocodeResponse geocode;

            if (response.IsSuccessStatusCode)
            {
                var dataObjects = response.Content.ReadAsStringAsync().Result;
                geocode = Newtonsoft.Json.JsonConvert.DeserializeObject<GeocodeResponse>(dataObjects);
            }
            else
            {
                string error = $"{(int)response.StatusCode} {response.ReasonPhrase}";
                Console.WriteLine(error);
                throw new Exception(error);
            }

            client.Dispose();
            return geocode;
        }
    }
}
