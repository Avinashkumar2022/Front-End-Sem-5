import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component 
{
  contactForm=new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    isMarried:new FormControl(),
    country:new FormControl(),
  })

  onSubmit(){
    console.log(this.contactForm.value);
  }
  countryList:country[]=[
    new country("1","India"),
    new country("2","Australia"),
    new country("3","England"),
  ]
}

export class country{
  id:string;
  name:string;

  constructor(id:string,name:string)
  {
    this.id=id;
    this.name=name;
  }

}