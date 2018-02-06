/** 在 Notification 对象中包装 next、error 和 complete 发送, 并在输出 Observable 上作为 next 发送出去。 */
var Rx = require('rxjs/Rx');

const letters$ = Rx.Observable.of('a', 'b', 13, 'd');
const upperCase$ = letters$.map(x => x.toUpperCase());
const materialized$ = upperCase$.materialize();
materialized$.subscribe(console.log);