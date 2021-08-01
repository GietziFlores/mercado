import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from '../app/pipes/exponential/exponential.pipe';
import { HighlightDirective } from "./highlight.directive";
import { HomeComponent } from "../app/home/home.component";
import { ProductsComponent } from "../app/products/products.component";
import { ContactComponent } from "../app/contact/contact.component";
import { DemoComponent } from "../app/demo/demo.component";
import { BannerComponent } from "./banner/banner.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { LayoutComponent } from "./layout/layout.component";
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,  
    LayoutComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
