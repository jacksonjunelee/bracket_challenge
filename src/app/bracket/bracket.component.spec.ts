import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketComponent } from './bracket.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BracketComponent', () => {
  let component: BracketComponent;
  let fixture: ComponentFixture<BracketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
