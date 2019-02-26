import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryChangeService {

  private categorySubject = new BehaviorSubject<string>('NEWS');

  constructor() { }

  change(category: string) {
    this.categorySubject.next(category);
  }

  registerSubscription(observer) {
    this.categorySubject.subscribe(observer);
  }
}
