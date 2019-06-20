import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  @ViewChild('shopCatgoryMenu', {static : false }) shopCatgoryMenu: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  openShopCatgoryMenu(){
    this.renderer.setStyle(this.shopCatgoryMenu.nativeElement, 'height', '100%');   
  }

  closeShopCatgoryMenu(){
    this.renderer.setStyle(this.shopCatgoryMenu.nativeElement, 'height', '0%');   
  }
}
