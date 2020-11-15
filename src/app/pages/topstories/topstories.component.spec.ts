import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopstoriesComponent } from './topstories.component';

describe('NewestComponent', () => {
  let component: TopstoriesComponent;
  let fixture: ComponentFixture<TopstoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});