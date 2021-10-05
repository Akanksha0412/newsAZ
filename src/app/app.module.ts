import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsAreaComponent } from './news-area/news-area.component';
import { NewsComponent } from './news/news.component';
import { NewsRightComponent } from './news-right/news-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsAreaComponent,
    NewsComponent,
    NewsRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
