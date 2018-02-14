/**
 * Created by www.Alga.me on 14/2/18.
 */

import crypto from 'crypto'

export default class Hmac {
    constructor(props={}){
        this.props = props;

        if(!this.props.secret || !this.props.input){
            return Promise.reject('Missing secret / input');
        }

        return this.generate();
    }

    generate(){
        const hmac = crypto.createHmac('sha256', this.props.secret);

        return new Promise((resolve,reject)=>{
            hmac.on('readable', () => {
                const data = hmac.read();
                if (data) {
                    return resolve(data.toString('hex'));
                }

                reject('nothing');
            });

            hmac.on('error', (err) => {
                reject(err);
            });

            hmac.write(this.props.input);
            hmac.end();
        });
    }
}


