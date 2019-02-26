import { Component, OnInit } from '@angular/core';

import { CategoryChangeService } from '@app/common/services';

@Component({
  selector: 'er-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private categoryChangeService: CategoryChangeService) { }

  ngOnInit() {
  }

  onClick(category: string) {
    this.categoryChangeService.change(category);
  }

}
