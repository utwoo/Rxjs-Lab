var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).map((value) => "x" + value).take(4)
    .mergeMapTo(
        Rx.Observable.interval(400).take(4),
        (outerValue, innerValue, outerIndex, innerIndex) => {
            return {
                outerIndex: outerIndex,
                innerIndex: innerIndex,
                outerValue: outerValue,
                innerValue: innerValue
            }
        })
    .subscribe(x => console.log(x));