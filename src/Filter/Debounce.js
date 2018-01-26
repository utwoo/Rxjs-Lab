var Rx = require('rxjs/Rx');

var result = Rx.Observable.interval(500)
    .debounce(() => Rx.Observable.interval(1500));
// debounce方法中observable的两次emit间隔中，原observable没有新值的话，原observable才emit值.

result.subscribe(x => console.log(x), error => console.log("Error:", error), () => console.log("FINISH"));
