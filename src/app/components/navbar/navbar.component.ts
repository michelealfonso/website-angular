import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostBinding, HostListener, VERSION } from '@angular/core';
import { randText } from '@ngneat/falso';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() {}

  showMenu = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
    let navbar = document.querySelector('.navabar') as HTMLElement;  
    if(this.showMenu === false) {
      navbar.classList.add('<i class="fa-solid fa-xmark"></i>');
    }
    else {
      navbar.classList.remove('<i class="fa fa-bars"></i>');
    }
  }
  

  navLinks = [
    {
      id: "home",
      title: "Home",
      linkurl: "/home",
    },
    {
      id: "features",
      title: "Features",
      linkurl: "/features",
    },
    {
      id: "product",
      title: "Product",
      linkurl: "/product",
    },
    {
      id: "about",
      title: "About",
      linkurl: "/about",
    },
  ];

    sections = [
      randText({ charCount: 1000 }),
      randText({ charCount: 300 }),
      randText({ charCount: 500 }),
    ];
    
}