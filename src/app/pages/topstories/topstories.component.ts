import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { NewsItem } from '../../models';
@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.scss']
})
export class TopstoriesComponent implements OnInit {
  topstories: NewsItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopStories().subscribe(stories => {
      this.topstories = stories;
    });
  }

}
