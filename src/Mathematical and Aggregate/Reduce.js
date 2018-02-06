/** 使用 accumulator (累加器) 函数将源 Observable 所发出的所有值归并在一起， 该函数知道如何将新的源值纳入到过往的累加结果中。 */
var Rx = require('rxjs/Rx');

Rx.Observable.range(1, 11)
    .reduce((acc, val) => {
        console.log(acc);
        return acc = acc + val
    }, 0)
    .subscribe();