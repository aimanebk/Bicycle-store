import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewChecked {
  @ViewChild('carouselExampleCaptions', {static : false }) shopCatgoryMenu: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewChecked() {
 }   

}
