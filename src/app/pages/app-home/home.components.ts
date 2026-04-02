import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({                                       
//   template:'<h2>Hello from new component<h2>',
  templateUrl:'./home.components.html',
  selector:'app-home',
  imports:[ FormsModule,CommonModule],
  standalone:true,

})  
export class Home{
  name:string="riham 🎶"
  img:string="../assets/1.jfif"
  isTrue:boolean=true
  isActive:boolean=true
  user:string="hi"
  searchInput: string=''

  log():void{
    console.log('hi');
  }
  showalert(e:any):void{
    console.log(e)
  }

}                                                                              