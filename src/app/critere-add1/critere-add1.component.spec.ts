import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritereAdd1Component } from './critere-add1.component';

describe('CritereAdd1Component', () => {
  let component: CritereAdd1Component;
  let fixture: ComponentFixture<CritereAdd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritereAdd1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
