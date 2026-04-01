import { Component } from "@angular/core";

@Component({
//   template:'<h2>Hello from new component<h2>',
  templateUrl:'./home.components.html',
  selector:'app-home',
  imports:[],
  standalone:true,

})  
export class Home{
  name:string="riham"
}