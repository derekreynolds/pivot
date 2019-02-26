import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryChangeService {

  private subCategorySubject = new BehaviorSubject<string>('ALL');

  constructor() { }

  change(category: string) {
    this.subCategorySubject.next(category);
  }

  registerSubscription(observer) {
    this.subCategorySubject.subscribe(observer);
  }

}
