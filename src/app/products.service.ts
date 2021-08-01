import { Injectable } from '@angular/core';
import { Product } from "./product.module";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[]= [
    {
      id:'1',
      image: 'assets/images/abarrotes.png',
      title:'Abarrotes',
      price: 500,
      description: 'Apartado de abarrotes'
    },{
      id:'2',
      image: 'assets/images/carne.png',
      title:'Carne',
      price: 600,
      description: 'Apartado de Carne'
    },{
      id:'3',
      image: 'assets/images/verduras.png',
      title:'Verduras',
      price: 650,
      description: 'Apartado de Verduras'
    },{
      id:'4',
      image: 'assets/images/tacos.png',
      title:'Tacos',
      price: 200,
      description: 'Apartado de tacos'
    }
  ];

  constructor() { }
  getAllProducts(){
    return this.products
  }
  getProduct(id:string){
    return this.products.find(item => id === item.id)
  }
}
