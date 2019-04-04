import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsuccessComponent } from './feedsuccess.component';

describe('FeedsuccessComponent', () => {
  let component: FeedsuccessComponent;
  let fixture: ComponentFixture<FeedsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
