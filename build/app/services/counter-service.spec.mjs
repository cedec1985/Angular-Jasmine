import { CounterService } from "./counter-service.mjs";
describe('CounterService', () => {
    let service;
    beforeEach(() => {
        service = new CounterService();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should return the initial count as 0', (done) => {
        service.getCount().subscribe(count => {
            expect(count).toBe(0);
            done();
        });
    });
    it('should increment the count', (done) => {
        service.increment();
        service.getCount().subscribe(count => {
            expect(count).toBe(1);
            done();
        });
    });
    it('should decrement the count', (done) => {
        service.increment(); // count = 1
        service.decrement(); // count = 0
        service.getCount().subscribe(count => {
            expect(count).toBe(0);
            done();
        });
    });
    it('should reset the count to a specific value', (done) => {
        service.increment(); // count = 1
        service.reset(42);
        service.getCount().subscribe(count => {
            expect(count).toBe(42);
            done();
        });
    });
    it('should emit the new value on every change', (done) => {
        const values = [];
        service.getCount().subscribe(count => {
            values.push(count);
            if (values.length === 4) {
                expect(values).toEqual([0, 1, 0, 10]);
                done();
            }
        });
        service.increment(); // 1
        service.decrement(); // 0
        service.reset(10); // 10
    });
});
//# sourceMappingURL=counter-service.spec.js.map
