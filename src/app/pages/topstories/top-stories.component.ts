import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import { NewsItem } from '../../models';
@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  topStories: NewsItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopStories().subscribe(stories => {
      this.topStories = stories;
    });
  }

}
