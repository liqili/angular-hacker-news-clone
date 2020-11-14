import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { NewsItem } from '../../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: NewsItem[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStories().subscribe(news => {
      this.news = news;
    });
  }
}
