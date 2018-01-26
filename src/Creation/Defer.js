var Rx = require('rxjs/Rx');

var Result = Rx.Observable.defer(() => {
    if (Math.random() > 0.5) {
        return Rx.Observable.of([1, 2, 3]);
    } else {
        return Rx.Observable.of([7, 8, 9]);
    }
});

for (let i = 0; i < 5; i++) {
    Result.subscribe(x => console.log(x));
}