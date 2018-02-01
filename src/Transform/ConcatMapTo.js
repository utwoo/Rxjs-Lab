var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .concatMapTo(
    Rx.Observable.of([1, 2, 3, 4]),
    (outerValue, innerValue, outerIndex, innerIndex) => {
        return { outerValue: outerValue, innerValue: innerValue, outerIndex: outerIndex, innerIndex: innerIndex }
    })
    .subscribe(x => console.log(x));