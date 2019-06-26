import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  featuredProduct : Products[] = [  
    {
      title : 'mountain bikes',
      description : 'Carbon Rims Wide',
      price : 700,
      image : 'assets/imgs/parts/parts-1.png'
    },
    {
      title : 'Frames',
      description : 'Zealous Div Frame',
      price : 900,
      image : 'assets/imgs/parts/parts-2.png'
    },
    {
      title : 'Aero system',
      description : 'ShockStop Suspension Stem',
      price : 700,
      image : 'assets/imgs/parts/parts-3.png'
    },
    {
      title : 'Aero system',
      description : 'Redshift DUAL-POST SEATPOST',
      price : 700,
      image : 'assets/imgs/parts/parts-4.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
