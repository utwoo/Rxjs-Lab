/** 返回 ConnectableObservable，它是 Observable 的变种，它会一直等待，直到 connnect 方法被调用才会开始把值发送给那些订阅它的观察者。 */
var Rx = require('rxjs/Rx');

console.log('-- connection observable --');
// const connect$ = Rx.Observable.interval(1000).take(5)
//     .publish();

// connect$.subscribe(x => console.log("x:", x));
// connect$.subscribe(y => console.log("y:", y));

// connect$.connect();

console.log('-- selector --');
const connectSelector$ = Rx.Observable.interval(500)
    .publish(shared => {
        return Rx.Observable.concat(shared.take(2), shared.take(3))
    })
    .subscribe(x => console.log("x:", x));
/** 
 x: 0  first shared take(2)
 x: 1
 x: 2  then shared continue take(3)
 x: 3
 x: 4
*/