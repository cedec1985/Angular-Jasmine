import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCounterComponent3 } from './service-counter-component3';

describe('ServiceCounterComponent3', () => {
  let component: ServiceCounterComponent3;
  let fixture: ComponentFixture<ServiceCounterComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCounterComponent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCounterComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
