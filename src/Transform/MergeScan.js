// 很像 scan，但 accumulator 函数返回的 Observables 会被合并到外部 Observalbe 中。
var Rx = require('rxjs/Rx');

Rx.Observable.interval(1000)
    .mergeScan((acc, val) => {
        return Rx.Observable.of([...acc, val])
    }, [])
    .take(10)
    .subscribe(console.dir);