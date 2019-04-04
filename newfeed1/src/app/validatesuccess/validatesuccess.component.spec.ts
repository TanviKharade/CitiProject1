import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatesuccessComponent } from './validatesuccess.component';

describe('ValidatesuccessComponent', () => {
  let component: ValidatesuccessComponent;
  let fixture: ComponentFixture<ValidatesuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatesuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
