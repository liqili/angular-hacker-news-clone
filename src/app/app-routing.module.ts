import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './pages/stories/stories.component';
import { TopStoriesComponent } from './pages/topstories/top-stories.component';
import {CommentsComponent} from './pages/comments/comments.component';
import {BestStoriesComponent} from './pages/beststories/best-stories.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesComponent,
  },
  {
    path: 'topstories',
    component: TopStoriesComponent,
  },
  {
    path: 'beststories',
    component: BestStoriesComponent,
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
