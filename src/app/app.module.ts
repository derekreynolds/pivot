import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClickableIndicatorDirective } from './common/ui/util/clickable-indicator.directive';
import { HeaderComponent } from './layout/header/header.component';
import { LogoComponent } from '@app/logo/logo.component';
import { ActionHeaderComponent } from './layout/action-header/action-header.component';
import { SubHeaderComponent } from './layout/sub-header/sub-header.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ListArticleComponent } from './news/list-article/list-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ClickableIndicatorDirective,
    HeaderComponent,
    LogoComponent,
    ActionHeaderComponent,
    SubHeaderComponent,
    WeatherComponent,
    WeatherCardComponent,
    NavigationComponent,
    FooterComponent,
    NewsComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
