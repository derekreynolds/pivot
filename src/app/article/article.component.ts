import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '@app/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private sub: any;

  private article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];

      this.articleService.get(id).subscribe(article => this.article = article);
      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
