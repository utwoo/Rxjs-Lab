/** 拦截源 Observable 上的每次发送并且运行一个函数，但返回的输出 Observable 与 源 Observable 是相同的，只要不发生错误即可。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .do((x) => {
        console.log("Inner:", x);
        if (x === 3) {
            throw new Error('equal to 3');
        }
    })
    .subscribe((x) => console.log("Outer:", x));