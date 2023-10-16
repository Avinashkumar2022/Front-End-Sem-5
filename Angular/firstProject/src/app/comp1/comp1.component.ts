import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  products={
    name:"Samsung galaxy",
    price:20000,
    gst:50
  } 

  calculatePrice(){
    return this.products.price+this.products.gst;
  }
}
