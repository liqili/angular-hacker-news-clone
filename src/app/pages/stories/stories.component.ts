import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import { NewsItem } from '../../models';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories: NewsItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStories().subscribe(results => {
      this.stories = results;
    });
  }
}
