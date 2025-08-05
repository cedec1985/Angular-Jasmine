import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReducer } from './counter-reducer';

describe('CounterReducer', () => {
  let component: CounterReducer;
  let fixture: ComponentFixture<CounterReducer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterReducer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterReducer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
