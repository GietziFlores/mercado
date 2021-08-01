//import {} from '';
import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    SimpleChanges, 
    OnInit,
    DoCheck
} from '@angular/core';
import { Product } from '../product.module';


@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck{
    @Input() product:Product;
    @Output() productClicked:EventEmitter<any>=new EventEmitter();

    today = new Date();
    
    constructor(){
        console.log('1. Constructor ');
    // }
    // ngOnChanges(changes: SimpleChanges){
    //     console.log('2. Changes');
    //     console.log(changes); 
}

    ngOnInit(){
        console.log('3. ngOnInit')
    }

    ngDoCheck(){
        console.log('4. doCheck');
    }
    ngOnDestroy(){
        console.log('5 ngOnDestroy');
    } 

    addCart(){
        console.log('Añadir al carro');
        this.productClicked.emit(this.product.image)
    };
}