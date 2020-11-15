import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import {NewsItem} from '../../models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  private story: NewsItem;

  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.story = params.commentIds;
    });
  }
}
