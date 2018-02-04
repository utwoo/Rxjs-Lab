var Rx = require('rxjs/Rx');

describe('Observable.prototype.publishBehavior()', function () {
    it('should return a ConnectableObservable', function () {
        var source = Rx.Observable.of(1).publishBehavior(1);
        expect(source instanceof Rx.ConnectableObservable).toBe(true);
    });
});