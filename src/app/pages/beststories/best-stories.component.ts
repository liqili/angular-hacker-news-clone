import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import { NewsItem } from '../../models';
@Component({
  selector: 'app-best-stories',
  templateUrl: './best-stories.component.html',
  styleUrls: ['./best-stories.component.scss']
})
export class BestStoriesComponent implements OnInit {
  bestStories: NewsItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBestStories().subscribe(stories => {
      this.bestStories = stories;
    });
  }

}
