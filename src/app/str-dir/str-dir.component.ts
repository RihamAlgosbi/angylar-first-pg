import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Iproducts{
  name:string;
  price:number;
  image:string;
}
@Component({
  selector: 'app-str-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './str-dir.component.html',
  styleUrl: './str-dir.component.scss'
})
export class StrDirComponent {
  userName:string='Riham'
  isFull:boolean=true
  userRole:string='user'
  products:Iproducts[]=[
    {name:'mobile',price:1000,image:'../assets/2.avif'},
    {name:'laptop',price:500,image:'../assets/3.webp'},
  ]
}
