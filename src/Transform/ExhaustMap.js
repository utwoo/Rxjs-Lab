var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .exhaustMap((value, index) => Rx.Observable.interval(1000).take(2).map((valueMap, indexMap) => { return [value, valueMap] }))
    .subscribe(console.log);
/** 
[ 0, 0 ]〇
[ 0, 1 ]〇
[ 1, 0 ]×
[ 1, 1 ]×
[ 2, 0 ]〇
[ 2, 1 ]〇
*/
