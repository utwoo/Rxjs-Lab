var Rx = require('rxjs/Rx');

var observable = Rx.Observable.create(observer => {
    //syn
    observer.next(1);
    observer.next(2);
    observer.next(3);

    //asyn
    setTimeout(() => {
        observer.next(4);

        // emit number 4. 
        //observer.error('something went really wrong...');
        //observer.complete();

    }, 1000);

    // not emit number 4. 
    observer.error('something went really wrong...');
    //observer.complete();

    return {
        // unsubscribe will be called when subscription to Observable is being cancelled 
        // and should be used to clean up all resources.
        unsubscribe: () => { console.log('clear some resources.') }
    }
});

console.log('-- sync start --');
var subsciprion = observable.subscribe({
    next: x => { console.log(x) },
    error: error => { console.log('Error:', error); },
    complete: () => { console.log('complete'); }
});
console.log('-- sync end --');

setTimeout(() => {
    subsciprion.unsubscribe();
}, 5000);
