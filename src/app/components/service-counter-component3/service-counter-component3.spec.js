// @ts-nocheck
import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ServiceCounterComponent3 } from './service-counter-component3';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
describe('ServiceCounterComponent3', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ServiceCounterComponent3],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({
                            get: (key) => {
                                if (key === 'servcount3Id') {
                                    return '2024'; // valeur simulée
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
    }));
    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should get the route parameter "servcount3Id" and assign it to id', () => {
        expect(component.id).toBe('2024');
    });
});
//# sourceMappingURL=service-counter-component3.spec.js.map
