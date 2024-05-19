import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Configurer BDD', icon: 'add', class: '' },
  { path: '/user-profile', title: 'Configurer FTP/SFTP', icon: 'cloud', class: '' },
  { path: '/table-list', title: 'Mailing List', icon: '@', class: '' },
  { path: '/typography', title: 'Rapport', icon: 'content_paste', class: '' },
  { path: '/icons', title: 'Programmer', icon: 'alarm', class: '' },
  //{ path: '/maps', title: 'Configurer BDD', icon: 'location_on', class: '' },
  //{ path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
  
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
