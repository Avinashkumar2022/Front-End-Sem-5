import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  onSubmit(contactForm:any)
  {
    console.log(contactForm.value);
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
