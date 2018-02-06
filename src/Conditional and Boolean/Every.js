/** 返回的 Observable 发出是否源 Observable 的每项都满足指定的条件。 */
var Rx = require('rxjs/Rx');

Rx.Observable.from([1, 2, 3, 4])
    .every(x => x < 5)
    .subscribe(console.log);