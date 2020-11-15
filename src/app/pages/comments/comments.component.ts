import {Component, OnInit} from '@angular/core';
import {NewsItem} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent  implements OnInit {

  public story: NewsItem;
  private storyId: number;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.storyId = params.storyId;
    });

    if (this.router.getCurrentNavigation().extras.state) {
      const routeState = this.router.getCurrentNavigation().extras.state;
      if (routeState) {
        this.story = routeState.story;
      }
    }
  }

  ngOnInit(): void {
    if (!this.story && this.storyId) {
      this.apiService.getStory(this.storyId).subscribe(result => {
        this.story = result;
      });
    }
  }
}
