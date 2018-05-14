import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballComponent } from './football.component';

describe('FootballComponent', () => {
  let component: FootballComponent;
  let fixture: ComponentFixture<FootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rounds', () => {
    component.index = 0;
    expect(component.setRounds).toBe('Final')
  });

  it('should get update index for next component', () => {
    component.index = 0;
    expect(component.getIndex).toBe(1);
  });
});
