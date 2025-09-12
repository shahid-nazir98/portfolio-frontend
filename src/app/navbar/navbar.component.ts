import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() drawer!: MatSidenav; 
  //  @ViewChild('drawer') drawer!: MatSidenav;

  toggleDrawer() {
    this.drawer.toggle();
  }

}
