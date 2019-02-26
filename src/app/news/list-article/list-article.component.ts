import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { CategoryChangeService, SubCategoryChangeService } from '@app/common/services';
import { HttpClient } from '@angular/common/http';

import { ArticleService } from '@app/article/article.service';
import { Article } from '@app/common/model';

import { Observable } from 'rxjs';

@Component({
  selector: 'er-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  private isSmallScreen = false;

  private articles;

  private category: string;

  private subCategory: string;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver,
        private httpClient: HttpClient, private categoryChangeService: CategoryChangeService,
        private subCategoryChangeService: SubCategoryChangeService, private articleService: ArticleService) {

    breakpointObserver.observe([
      '(max-width: 600px)'
        ]).subscribe(result => {
          if (result.matches) {
            this.isSmallScreen = true;
          } else {
            this.isSmallScreen = false;
          }
        });

        categoryChangeService.registerSubscription(category => {
          this.category = category;
          this.articleService.getAll(1, 10, category, null)
            .subscribe(articles => this.articles = articles);
            if (this.router.url !== '/news') {
              this.router.navigate(['news']);
            }
        });

        subCategoryChangeService.registerSubscription(subCategory => {
          this.subCategory = subCategory;
          if (subCategory === 'ALL') {
            subCategory = null;
          }

          this.articleService.getAll(1, 10, this.category, subCategory)
            .subscribe(articles => this.articles = articles);
        });

  }

  ngOnInit() {
  }

  onClick(id: string) {
    this.router.navigate(['news/article', id]);
  }

  onClickSubCategory(subCategory: string) {
    this.subCategoryChangeService.change(subCategory);
  }

}
