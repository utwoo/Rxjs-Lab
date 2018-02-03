/** 把每个值映射成 Observable，然后使用 exhaust 操作符打平所有的内部 Observables 。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(3)
    .exhaustMap((value, index) => Rx.Observable.interval(1000).take(2).map((valueMap, indexMap) => {
        return [value, valueMap]
    }))
    .subscribe(console.log);
/** 
 [ 0, 0 ]〇
 [ 0, 1 ]〇
 [ 1, 0 ]×
 [ 1, 1 ]×
 [ 2, 0 ]〇
 [ 2, 1 ]〇
*/