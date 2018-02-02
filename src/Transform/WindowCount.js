/** 就像是 bufferCount, 但是返回嵌套的 Observable 而不是数组。 */
var Rx = require('rxjs/Rx');

var interval = parseInt(Math.random() * 10) + 1;
console.log("count:", interval);
Rx.Observable.interval(1000).take(10)
    .windowCount(interval)
    .map((value, index) => value.take(2))
    .mergeAll()
    .subscribe(console.log);