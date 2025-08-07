import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCounterComponent } from '../service-counter/service-counter';

describe('ServiceCounter', () => {
  let component: ServiceCounterComponent;
  let fixture: ComponentFixture<ServiceCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCounterComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
