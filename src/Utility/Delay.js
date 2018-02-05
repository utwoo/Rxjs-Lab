/** 每个数据项的发出时间都往后推移固定的毫秒数. */
var Rx = require('rxjs/Rx');

Rx.Observable.interval(500).take(5).delay(500) //or date
    .subscribe(console.log);