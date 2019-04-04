import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedgenerateComponent } from './feedgenerate.component';

describe('FeedgenerateComponent', () => {
  let component: FeedgenerateComponent;
  let fixture: ComponentFixture<FeedgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
