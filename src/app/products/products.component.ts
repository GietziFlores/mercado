import { Component, OnInit } from '@angular/core';

import { Product } from '../product.module';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
// Ojo con la linea de aqui arrona 
  constructor() {}

  ngOnInit(){}
  
  clickProduct(id:number){
    console.log('Product');
    console.log(id);
  }
}
