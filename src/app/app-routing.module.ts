import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { TopstoriesComponent } from './pages/topstories/topstories.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'topstories',
    component: TopstoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
