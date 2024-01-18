import * as rxjs from 'rxjs';
import { ajax } from 'rxjs/ajax';

const obs$ = ajax.getJSON("https://api.github.com/users?per_page=5").pipe(
    rxjs.map(resp => console.log('resp', resp)),
    rxjs.catchError(err => { console.log('err', err); return rxjs.of(err); })
)

obs$.subscribe({
    next: (value) => console.log('next', value),
    error: (err) => console.log('error', err),
    complete: () => console.log('complete')
});
