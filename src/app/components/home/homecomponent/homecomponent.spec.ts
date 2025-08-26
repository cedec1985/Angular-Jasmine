import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Homecomponent } from './homecomponent.js';
import { CounterComponent } from '../../counter/counter-component.js';
import { ServiceCounterComponent } from '../../service-counter/service-counter.js';

describe('Homecomponent', () => {
  let component: Homecomponent;
  let fixture: ComponentFixture<Homecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Homecomponent],
      imports: [CounterComponent, ServiceCounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Homecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should handle count change and log the value', () => {
    const consoleSpy = spyOn(console, 'log');
    component.handleCountChange(5);
    expect(consoleSpy).toHaveBeenCalledWith('countChange event from CounterComponent', 5);
  });
});
