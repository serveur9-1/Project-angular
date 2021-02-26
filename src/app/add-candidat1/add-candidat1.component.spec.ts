import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidat1Component } from './add-candidat1.component';

describe('AddCandidat1Component', () => {
  let component: AddCandidat1Component;
  let fixture: ComponentFixture<AddCandidat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCandidat1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
