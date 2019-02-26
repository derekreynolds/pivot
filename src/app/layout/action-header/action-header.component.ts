import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'er-action-header',
  templateUrl: './action-header.component.html',
  styleUrls: ['./action-header.component.scss']
})
export class ActionHeaderComponent implements OnInit {

  private today: Date = new Date();


  constructor() { }

  ngOnInit() {
  }

}
