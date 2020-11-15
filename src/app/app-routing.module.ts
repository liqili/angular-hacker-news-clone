import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './pages/stories/stories.component';
import { TopstoriesComponent } from './pages/topstories/topstories.component';
import {CommentsComponent} from './pages/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesComponent,
  },
  {
    path: 'topstories',
    component: TopstoriesComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
