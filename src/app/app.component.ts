import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/app-home/home.components';
import { AboutComponent } from './about/about.component';
import { StrDirComponent } from './str-dir/str-dir.component';
import { OutComponent } from './out/out.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProjection2Component } from './content-projection2/content-projection2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home,AboutComponent,StrDirComponent,OutComponent,ContentProjectionComponent,ContentProjection2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   title = 'angular-first-pg';
  userName:string='riham algosbi'
  getFromChild:string=''
 
}
