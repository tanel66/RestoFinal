import { Component, OnInit } from '@angular/core';

declare const on: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

navbarOpen = false;
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
