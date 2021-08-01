import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Mercado SantaFe';

  items = ['Ihann ','Gietzi ', 'Carballar '];
  addItem(){ //Buton
    this.items.push('Nuevo Item ');
  }

  objeto={};

  power = 10; 

  deleteItem(index: number){
    this.items.splice(index,1)
  }

  ngOnInit(){}
}
