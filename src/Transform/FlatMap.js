/** 把映射后新的Observable转化为了数据流，订阅之后会获得这个新Observable发射的数据，而不是Observable本身。 */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(500).take(5)
    .flatMap((value) => {
        return Rx.Observable.of([value, value + '1', value + '2']);
    })
    .subscribe(console.dir);