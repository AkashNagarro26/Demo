import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'app';
  title='works';
  street:string="dlf";
  city:string="gurgaon";
  region:string="west";
  showAddress:boolean=false;
  addressHide(){

this.showAddress=!this.showAddress;

  }



}
