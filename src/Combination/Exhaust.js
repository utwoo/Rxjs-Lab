/** 在当前内部 Observable 仍在执行的情况下，通过丢弃 接下来的内部 Observable 将高阶 Observable 打平。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(3)
    .map((value) => {
        return Rx.Observable.interval(1000).take(2).map((valueMap, indexMap) => {
            return [value, valueMap]
        })
    })
    .exhaust()
    .subscribe(console.log);
/** 
 [ 0, 0 ]〇
 [ 0, 1 ]〇
 [ 1, 0 ]×
 [ 1, 1 ]×
 [ 2, 0 ]〇
 [ 2, 1 ]〇
*/