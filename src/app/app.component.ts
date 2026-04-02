import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/app-home/home.components';
import { AboutComponent } from './about/about.component';
import { StrDirComponent } from './str-dir/str-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home,AboutComponent,StrDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   title = 'angular-first-pg';
  userName:string='riham algosbi'
}
