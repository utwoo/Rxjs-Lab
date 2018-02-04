/** 返回一个ConnectableObservable。且只广播该Observable的最后一个值 */
var Rx = require('rxjs/Rx');

const connect$ = Rx.Observable.interval(500).take(5).publishLast();

connect$.subscribe(x => console.log("x:", x));
connect$.subscribe(y => console.log("y:", y));

connect$.connect();