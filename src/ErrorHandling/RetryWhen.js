var Rx = require('rxjs/Rx');

var retried = false;

Rx.Observable.create((observer) => {
        observer.next(1);
        observer.next(2);
        observer.error('error!');
        observer.next(3)
    })
    .retryWhen(errors => {
        return errors.map((x) => {
            if (retried) {
                throw new Error('finish.')
            }
            retried = true;
            return x;
        })
    })
    .subscribe(console.log);