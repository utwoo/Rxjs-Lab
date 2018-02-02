var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(3)
    .mergeMap((value, index) => {
        return Rx.Observable.interval(400).take(4).mapTo(value);
    })
    .subscribe(x => console.log(new Date().getTime() + ':', x));
// -0-0-0-1-0-1-1-2-1-2-2-2 (different with ConcatMap)