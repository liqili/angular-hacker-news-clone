import {Component} from '@angular/core';
import {NewsItem} from '../../models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  public story: NewsItem;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      const routeState = this.router.getCurrentNavigation().extras.state;
      if (routeState) {
        this.story = routeState.story;
      }
    }
  }
}
