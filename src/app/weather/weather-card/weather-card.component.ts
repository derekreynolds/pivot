import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'er-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

	@Input()
  	day: string;

  	@Input()
  	highTemperature: number;

  	@Input()
  	lowTemperature: number;

  	pivoted: boolean = false;

  	constructor() { }

	ngOnInit() {
	}

  	onClick() {
  		this.pivoted = !this.pivoted;
  	}

}
