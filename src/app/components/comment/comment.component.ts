import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NewsItem} from '../../models';
import {ApiService} from '../../services/api/api.service';
import {DynamicComponentService} from '../../services/dynamic-component/dynamic-component.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @ViewChild('dynamic', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  @Input() comment: NewsItem;

  comments: NewsItem[];

  viewReply: number;

  constructor(private dynComponent: DynamicComponentService, private apiService: ApiService) {
    this.viewReply = null;
  }


  ngOnInit() {
    if (this.comment && this.comment.kids) {
      this.apiService.getComments(this.comment.kids).subscribe(comments => {
        this.comments = comments.filter(item => item);
      });
    }
  }

  onViewReply(comment: NewsItem) {
    this.viewReply = comment.id;
    setTimeout(() => {
      this.dynComponent.addDynamicComponent(this.viewContainerRef, comment);
    }, 100);

  }

}
