/** 对Observable进行转换，并刷新当前Observable */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(3)
    .switchMap((value, index) => {
        return Rx.Observable.interval(400).take(4).mapTo(value);
    })
    .subscribe(x => console.log(new Date().getTime() + ':', x));
// -0-0-1-1-2-2-2-2 (different with ConcatMap)