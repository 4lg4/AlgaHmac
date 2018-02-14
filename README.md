# AlgaHmac
NodeJS Hmac class using promises


### How to use
````javascript
import Hmac from './Hmac'

const secret = 'myverySecret';
const input = 'myTextInput bla bla bla';

Promise
    .resolve()
    .then(()=>new Hmac({
        secret,
        input
    }))
    .then((r)=>console.log(r))
    .catch((err)=>console.log('ERROR', err));
````
