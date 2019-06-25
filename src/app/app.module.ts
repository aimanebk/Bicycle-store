import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SliderComponent } from './home/slider/slider.component';
import { PresentationComponent } from './home/presentation/presentation.component';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ProductsComponent } from './home/products/products.component';
import { HorizontalProductComponent } from './home/products/horizontal-product/horizontal-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    PresentationComponent,
    ProductsComponent,
    HorizontalProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot()   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
