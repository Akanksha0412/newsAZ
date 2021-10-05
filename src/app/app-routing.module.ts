import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAreaComponent } from './news-area/news-area.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {
    path : "news/:id",
    component : NewsComponent
  },
  {
    path : "",
    component: NewsAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
