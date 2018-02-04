/** 返回的 Observable 发出对 ConnectableObservable 发出的项调用一个指定的 selector 函数的结果， ConnectableObservable 可以在潜在的多个流之间共享单个 subscription 。 */
var Rx = require('rxjs/Rx');

const seconds$ = Rx.Observable.interval(1000).take(5)

console.log('-- Use ConnectableObservable --');
const connectableSeconds$ = seconds$.multicast(new Rx.Subject());

connectableSeconds$.subscribe(value => console.log('first: ' + value));
connectableSeconds$.subscribe(value => console.log('second: ' + value));

connectableSeconds$.connect();

console.log('-- Use selector --');
seconds$
    .multicast(
        () => new Rx.Subject(),
        seconds => seconds.zip(seconds) //某些链式方法导致需要subscribe多次原Observable时，写在这里只会对原Observable进行subscribe一次。
    )
    .subscribe(console.log);

// Usually zip would subscribe to `seconds` twice.
// Because we are inside selector, `seconds` is subscribed once,
// thus starting only one clock used internally by Observable.interval.