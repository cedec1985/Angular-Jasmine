
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { counterReducer, initialState } from './counter-reducer.js';

describe('counterReducer', () => {
  let component: typeof counterReducer;
  let fixture: ComponentFixture<typeof counterReducer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [counterReducer],
      declarations: [counterReducer]
    })
    .compileComponents();

  });

})
/*
   fixture = TestBed.createComponent();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(counterReducer).toBeTruthy();
  });
*/

