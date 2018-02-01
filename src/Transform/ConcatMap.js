var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .concatMap((value, index) => {
        return Rx.Observable.of([value, value + 1, value + 2]);
    })
    .subscribe(x => console.log(x));
// -- [ 0, 1, 2 ] [ 1, 2, 3 ] [ 2, 3, 4 ] --