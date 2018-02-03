/** 返回源 Observable 和提供的 Observables 的组合中 第一个发出项的 Observable 的镜像 */
var Rx = require('rxjs/Rx');

const x = Math.random();
const y = Math.random();
const z = Math.random();

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);

Rx.Observable.race(
        Rx.Observable.interval(x * 1000).take(1).mapTo("x"),
        Rx.Observable.interval(y * 1000).take(1).mapTo("y"),
        Rx.Observable.interval(z * 1000).take(1).mapTo("z")
    )
    .subscribe(console.dir);