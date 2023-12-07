import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-box',
  templateUrl: './wind-box.component.html',
  styleUrls: ['./wind-box.component.css']
})
export class WindBoxComponent {

  @Input() windDirection: string = '';
  @Input() windSpeed: number | undefined;
  @Input() gusts: number | undefined;

}
