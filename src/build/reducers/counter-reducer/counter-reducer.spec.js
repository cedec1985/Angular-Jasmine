import { __awaiter } from "tslib";
import { counterReducer } from '../../reducers/counter-reducer/counter-reducer.js';
import { TestBed } from '@angular/core/testing';
describe('counterReducer', () => {
    let component;
    let fixture;
    // @ts-ignore
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [counterReducer],
            declarations: [counterReducer]
        })
            .compileComponents();
    }));
});
/*

   fixture = TestBed.createComponent();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/
//# sourceMappingURL=counter-reducer.spec.js.map
