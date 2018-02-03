var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(4)
    .map((valueOuter) => Rx.Observable.interval(400).take(4).map((valueInner) => {
        return "Outer:" + valueOuter + ", Inner:" + valueInner;
    }))
    .mergeAll()
    .subscribe(console.log);