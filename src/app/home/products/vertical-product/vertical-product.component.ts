import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-vertical-product',
  templateUrl: './vertical-product.component.html',
  styleUrls: ['./vertical-product.component.scss']
})
export class VerticalProductComponent implements OnInit, OnChanges {
  @Input() product : Products;
  @Input() backgroundColor : string;
  
  @ViewChild('section2', {static : true}) section2: ElementRef;

  constructor(private rendrer2 : Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.rendrer2.setStyle(this.section2.nativeElement, 'background', this.backgroundColor);
  }

}
