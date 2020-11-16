import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BeststoriesComponent } from './topstories.component';

describe('NewestComponent', () => {
  let component: BeststoriesComponent;
  let fixture: ComponentFixture<BeststoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BeststoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeststoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
