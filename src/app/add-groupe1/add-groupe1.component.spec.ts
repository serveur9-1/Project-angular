import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupe1Component } from './add-groupe1.component';

describe('AddGroupe1Component', () => {
  let component: AddGroupe1Component;
  let fixture: ComponentFixture<AddGroupe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
