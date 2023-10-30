import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component 
{
  // quantity:number=0;
  products={
    name:"Samsung galaxy",
    price:20000,
    gst:50,
    image:"https://cdn.dxomark.com/wp-content/uploads/medias/post-74826/SamsungGalaxys215g.jpg",
    image2:"D:\College\programming\FrontEnd college\Angular\firstProject\src\assets\images",
    inStock:20,
    quantity:4
  }

  decreaseQuantity()
  {
    if(this.products.quantity>0)
    this.products.quantity--
  }
  
  increaseQuantity()
  {
    if(this.products.quantity<this.products.inStock)
      this.products.quantity++

  }
  calculatePrice(){
    return this.products.price+this.products.gst;
  }

  changeProductName(){
    this.products.name="Samsung Galaxy S23 Ultra"
  }

  changeProductName2(){
    this.products.name="Motorola Moto G31"
  }

  applyStyles(){
    let styles={
      'color':'white',
      'background-color':'green'
    }
    return styles
  }
  reviewList=[
    {name:"Mario",review:"Not a pipe. 0 stars"},
    {name:"Master Chief", review:"Kill all revenants"},
    {name:"Ashish",review:"Very good use of cybernatics. 5 stars"},
    {name:"DOOM GUY",review:"Looks like a shotgun. 4 stars"}
  ]
}
