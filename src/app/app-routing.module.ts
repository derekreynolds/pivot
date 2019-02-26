import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { ListArticleComponent } from './news/list-article/list-article.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
	{ 
		path: 'news',
		component: NewsComponent,
		children: [
            {
                path: '',
                component: ListArticleComponent
            },
            {
                path: 'article/:id',
                component: ArticleComponent
            }
        ]
	},
	{path: '', redirectTo: '/news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
