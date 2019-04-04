import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatefailComponent } from './validatefail.component';

describe('ValidatefailComponent', () => {
  let component: ValidatefailComponent;
  let fixture: ComponentFixture<ValidatefailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatefailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatefailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
