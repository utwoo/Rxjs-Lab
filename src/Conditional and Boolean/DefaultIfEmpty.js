/** 如果源Observable本来就是空的,那么这个操作符会发出一个默认值。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(5000)
    .takeUntil(Rx.Observable.interval(2000))
    .defaultIfEmpty('no output')
    .subscribe(console.log);