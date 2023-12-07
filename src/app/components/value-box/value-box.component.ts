import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value-box',
  templateUrl: './value-box.component.html',
  styleUrls: ['./value-box.component.css']
})
export class ValueBoxComponent {

  @Input() title: string = '';
  @Input() value: string | number | undefined = ''
  @Input() unit?: string = ''
  

}
