

using Firebase.Database.Query;
using GoogleSniffer.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new Firebase.Database.FirebaseClient("https://edugeo-37a7c-default-rtdb.firebaseio.com/", null);
            var root = client.Child("Escuelas/");

            var db = new EdugeoModel();
            foreach(var item in db.Escuelas.OrderBy(i=>i.Id).Include(i=>i.GeoMarker).Where(i=>i.GeoMarker != null).ToList())
            {
                var result = root.PostAsync(item).Result;
            }
           
            root.Dispose();
        }

    }
}
