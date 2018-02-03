/** 返回的 Observable 会先发出作为参数指定的项，然后再发出由源 Observable 所发出的项。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000).take(5)
    .startWith(123)
    .subscribe(x => console.log(x));
// 123, 1, 2, 3,....