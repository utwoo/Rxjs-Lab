/** 对源 Observable 使用累加器函数， 返回生成的中间值， 可选的初始值。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .scan((acc, val) => [...acc, val], [])
    .take(10)
    .subscribe(console.dir);