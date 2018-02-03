/** 一旦有新的内部 Observable 出现，通过丢弃前一个，将 高级 Observable 打平。 */
var Rx = require('rxjs/Rx');

const x$ = Rx.Observable.interval(250).take(5).map(x => "x" + x);
const y$ = Rx.Observable.interval(500).take(5).map(y => "y" + y);

Rx.Observable.interval(1000).take(2).map(value => {
        if (value === 0) {
            return x$;
        } else {
            return y$;
        }
    })
    .switch()
    .subscribe(console.dir);