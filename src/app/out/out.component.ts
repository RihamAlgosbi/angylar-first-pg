import { Component, Output ,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-out',
  standalone: true,
  imports: [],
  templateUrl: './out.component.html',
  styleUrl: './out.component.scss'
})
export class OutComponent {

    @Output() emitData:EventEmitter<string>=new EventEmitter()

    log(){
      this.emitData.emit('share data from child to parent')
    }
}
