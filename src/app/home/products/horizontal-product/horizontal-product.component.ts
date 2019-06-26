import { Component, OnInit, Input, Renderer2, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-horizontal-product',
  templateUrl: './horizontal-product.component.html',
  styleUrls: ['./horizontal-product.component.scss']
})
export class HorizontalProductComponent implements OnInit , OnChanges {
  @Input() product : Products;
  @Input() backgroundColor : string;
  
  @ViewChild('section1', {static : true}) section1: ElementRef;

  constructor(private rendrer2 : Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.rendrer2.setStyle(this.section1.nativeElement, 'background', this.backgroundColor);
  }

}
