/** 第二个及以后才订阅这个ConnectableObservable时，只会受到最新的n个值 */
var Rx = require('rxjs/Rx');

var connect$ = Rx.Observable.of(1, 2, 3, 4, 5)
    .publishReplay(3)
    .refCount()

connect$.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
connect$.subscribe({
    next: (v) => console.log('observerB: ' + v)
});
connect$.subscribe({
    next: (v) => console.log('observerC: ' + v)
});