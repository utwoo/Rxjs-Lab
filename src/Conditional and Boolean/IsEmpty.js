/** 如果源 Observable 是空的话，它返回一个发出 true 的 Observable，否则发出 false 。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(5000)
    .takeUntil(Rx.Observable.interval(2000))
    .isEmpty()
    .subscribe(console.log);