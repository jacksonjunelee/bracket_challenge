import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerComponent } from './soccer.component';

describe('SoccerComponent', () => {
  let component: SoccerComponent;
  let fixture: ComponentFixture<SoccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerComponent);
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
