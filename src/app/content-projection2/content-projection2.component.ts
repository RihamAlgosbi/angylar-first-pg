import { Component } from '@angular/core';
import { ContentProjectionComponent } from '../content-projection/content-projection.component';

@Component({
  selector: 'app-content-projection2',
  standalone: true,
  imports: [ContentProjectionComponent],
  templateUrl: './content-projection2.component.html',
  styleUrl: './content-projection2.component.scss'
})
export class ContentProjection2Component {
 userName:string='riham'
  userEmail:string='riham@gmail.com'
  userPhone:number=12323454
}
