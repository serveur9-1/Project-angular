import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJuryComponent } from './add-jury.component';

describe('AddJuryComponent', () => {
  let component: AddJuryComponent;
  let fixture: ComponentFixture<AddJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
