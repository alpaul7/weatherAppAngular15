import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wind-direction',
  templateUrl: './wind-direction.component.html',
  styleUrls: ['./wind-direction.component.css']
})
export class WindDirectionComponent implements OnChanges {

  @Input() windDirection: string = '';
  directionClass: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    let direction = changes['windDirection']['currentValue'];
    this.directionClass = this.getDirectionClass(direction)
  }

  getDirectionClass(direction: string): string {
    switch (direction) {
      case "W":
        return ''
      case "E":
        return 'rotate-180'
      case "S":
        return '-rotate-90'
      case "N":
        return 'rotate-90'
      case "SW":
        return '-rotate-45'
      case "SE":
        return '-rotate-[135deg]'
      case "NW":
        return 'rotate-45'
      case "NE":
        return 'rotate-[135deg]'
      case "NNE":
        return 'rotate-[113deg]'
      case "ENE":
        return 'rotate-[157deg]'
      case "ESE":
        return '-rotate-[157deg]' //correct
      case "SSE":
        return '-rotate-[113deg]'
      case "SSW":
        return '-rotate-[67deg]'
      case "WSW":
        return '-rotate-[22deg]' //correct
      case "WNW":
        return 'rotate-[22deg]'
      case "NNW":
        return 'rotate-[67deg]'

    }
    return ''
  }

}
