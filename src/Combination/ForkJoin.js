/** 将多个Observable进行并行计算，并数组的形式返回它们各自的最新值 */
var Rx = require('rxjs/Rx');

Rx.Observable.forkJoin(
        Rx.Observable.of(42),
        Rx.Observable.range(0, 10),
        Rx.Observable.from([1, 2, 3]),
        (x, y, z) => x + y + z
    )
    .subscribe(console.dir);