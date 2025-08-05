import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCounter } from './service-counter';

describe('ServiceCounter', () => {
  let component: ServiceCounter;
  let fixture: ComponentFixture<ServiceCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
