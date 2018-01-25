var Rx = require('rxjs/Rx');

// Emit the number 7, then never emit anything eles(not even complete)
function info() {
    console.log('Will not be called.')
}
var result = Rx.Observable.never().startWith(7);
result.subscribe(x => console.log(x), info, info);