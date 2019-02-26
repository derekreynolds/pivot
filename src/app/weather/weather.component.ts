import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'er-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

	@Input()
  	day: string = "Monday";

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
