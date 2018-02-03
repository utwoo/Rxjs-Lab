/** 就像是 bufferWhen, 但是发出的是嵌套的 Observable 而不是数组。 */
var Rx = require('rxjs/Rx');

var interval = parseInt(Math.random() * 10) + 1;
console.log("count:", interval);
Rx.Observable.interval(1000).take(10)
    .windowWhen(() => Rx.Observable.interval(interval * 1000))
    .map((value, index) => value.take(2))
    .mergeAll()
    .subscribe(console.log);