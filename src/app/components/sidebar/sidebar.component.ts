import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Climate change',  icon:'bubble_chart', class: '' },
    { path: '/typography', title: 'Greenhouse CO2 emissions',  icon:'bubble_chart', class: '' },
    { path: '/icons', title: 'Resilience',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Poverty',  icon:'bubble_chart', class: '' },
 
    { path: '/notifications', title: 'Freshwater',  icon:'bubble_chart', class: '' },
    { path: '/sdgs', title: 'All SDGS',  icon:'bubble_chart', class: '' },
    { path: '/health', title: 'Health',  icon:'bubble_chart', class: '' },

    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },


    { path: '/upgrade', title: 'Logout',  icon:'unarchive', class: '' }
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
