import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { TopStoriesComponent } from './pages/topstories/top-stories.component';
import {CommentsComponent} from './pages/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {BestStoriesComponent} from './pages/beststories/best-stories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    TopStoriesComponent,
    BestStoriesComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
