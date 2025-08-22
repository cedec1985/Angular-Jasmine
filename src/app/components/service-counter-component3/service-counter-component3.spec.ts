import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCounterComponent3 } from './service-counter-component3.js';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ServiceCounterComponent3', () => {
  let component: ServiceCounterComponent3;
  let fixture: ComponentFixture<ServiceCounterComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCounterComponent3],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'servcount3Id') {
                  return '2024';                                                  // valeur simulée
                }
                return null;
              }
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCounterComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the route parameter "servcount3Id" and assign it to id', () => {
    expect(component.id).toBe('2024');
  });
});
