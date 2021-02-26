import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJury1Component } from './add-jury1.component';

describe('AddJury1Component', () => {
  let component: AddJury1Component;
  let fixture: ComponentFixture<AddJury1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJury1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJury1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
