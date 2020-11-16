import {Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef} from '@angular/core';
import {NewsItem} from '../../models';
import {CommentComponent} from 'src/app/components/comment/comment.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  addDynamicComponent(viewContainerRef: ViewContainerRef, comment: NewsItem) {

    if (!viewContainerRef) {
      return;
    }
    viewContainerRef.clear();

    const factory = this.factoryResolver.resolveComponentFactory(CommentComponent);
    const component: ComponentRef<CommentComponent> = factory.create(viewContainerRef.parentInjector);
    const currComponent = component.instance;

    currComponent.comment = comment;
    viewContainerRef.insert(component.hostView);

  }
}
