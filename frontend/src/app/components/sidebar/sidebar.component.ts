import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// ACA ARMAMOS DINAMICAMENTE EL MENU
export const ROUTES: RouteInfo[] = [
    { path: '/importaciones', title: 'Importaciones',  icon: 'import_export', class: '' },
    { path: '/expedientes', title: 'Expedientes',  icon: 'all_inbox', class: '' },
    { path: '/configuracion', title: 'Configuracion',  icon:'settings', class: '' },
    { path: '/tratas', title: 'Tratas',  icon:'all_inbox', class: '' },
    { path: '/usuarios', title: 'Usuarios',  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
