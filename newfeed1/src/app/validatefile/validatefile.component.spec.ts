import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatefileComponent } from './validatefile.component';

describe('ValidatefileComponent', () => {
  let component: ValidatefileComponent;
  let fixture: ComponentFixture<ValidatefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
