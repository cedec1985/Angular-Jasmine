import { counterReducer } from '../../reducers/counter-reducer/counter-reducer';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('counterReducer', () => {
  let component: typeof counterReducer;
  let fixture: ComponentFixture<typeof counterReducer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [counterReducer],
      declarations: [counterReducer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(this.counterReducer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
