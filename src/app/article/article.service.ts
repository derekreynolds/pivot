import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, ObservableInput } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Article } from '@app/common/model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url = 'http://localhost:3000/api/v1/articles';

  constructor(private httpClient: HttpClient) { }

  getAll(page = 0, pageSize = 10, category: string, subCategory?: string) {
    
    let url = this.url;

    url += `?_page=${page}&_limit=${pageSize}`;

    url += `&categories=${category}`;

    if (subCategory != null) {
      url += `&subCategories=${subCategory}`;
    }

    return this.httpClient.get<Article>(url)
    .pipe(
      catchError(this.handleError)
    );
  }

  get(id: string): Observable<Article> {
      return this.httpClient.get<Article>(this.url + '/' + id);
  }

  private handleError(err: any, caught: Observable<Article>): ObservableInput<{}> {
    console.log(err);
    return null;
  }
}
