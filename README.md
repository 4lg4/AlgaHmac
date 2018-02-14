# AlgaHmac
NodeJS Hmac class using promises


### How to use
````javascript
import AlgaHmac from './AlgaHmac'

const secret = 'myverySecret';
const input = 'myTextInput bla bla bla';

Promise
    .resolve()
    .then(()=>new AlgaHmac({
        secret,
        input
    }))
    .then((r)=>console.log(r))
    .catch((err)=>console.log('ERROR', err));
````
