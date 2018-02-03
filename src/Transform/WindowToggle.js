/** 就像是 bufferToggle, 但是发出的是嵌套 Observable 而不是数组。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(10)
    .windowToggle(Rx.Observable.interval(3000), () => Rx.Observable.interval(2500))
    .mergeAll()
    .subscribe(console.log);