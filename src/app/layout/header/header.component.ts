import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'er-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private pivoted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
  	this.pivoted = !this.pivoted;
  }

}
