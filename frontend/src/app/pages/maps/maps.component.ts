import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const google: any;

interface Marker {
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    constructor(private http: HttpClient) { }

    public escuelas: any[];


    ngOnInit() {


        this.http.get<any[]>(`https://edugeo-37a7c-default-rtdb.firebaseio.com/Escuelas.json`).subscribe(data => {
            

            var myLatlng = new google.maps.LatLng(-34.6194991, -58.4377922);
            var mapOptions = {
                zoom: 12,
                center: myLatlng,
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            this.escuelas = data;
            for (let key in this.escuelas) {
                let escuela = this.escuelas[key];
                let pos = new google.maps.LatLng(escuela.GeoMarker.Latitud,escuela.GeoMarker.Longitud);
                const htmlString = 
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeading">'+escuela.Nombre+'</h1>' +
                '<div id="bodyContent">' +
                '<p>'+escuela.Domicilio+'</p>' +
                '<p>'+escuela.Email+'</p>' +
                "</div>" +
                "</div>";
                const infowindow = new google.maps.InfoWindow({
                    content: htmlString,
                  });
                var marker = new google.maps.Marker({
                    position:pos,
                    title: escuela.Nombre,
                    map,
                });
                marker.addListener("click", () => {
                    infowindow.open(map, marker);
                  });
            }
            
        })
    }
}
