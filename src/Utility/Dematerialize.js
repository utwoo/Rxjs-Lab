/** 将 Notification 对象拆开成实际的 next、 error 和 complete 发送。它与 materialize 是相反的。 */
var Rx = require('rxjs/Rx');

var notifA = new Rx.Notification('N', 'A');
var notifB = new Rx.Notification('N', 'B');
var notifE = new Rx.Notification('E', void 0, new Error('Error.'));

Rx.Observable.of(notifA, notifB, notifE)
    .dematerialize()
    .subscribe({
        next: x => console.log(x),
        error: e => console.error(e)
    });