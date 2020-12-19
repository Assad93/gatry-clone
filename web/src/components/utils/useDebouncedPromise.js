import {useRef} from 'react';

// import { Container } from './styles';

function useDebouncedPromise(fn,delay) {
    let timeoutRef = useRef(null);
    // ...params -> rest
    function handler(...params) {
        return new Promise((resolve, reject)=>{

            if(timeoutRef.current) {
                clearTimeout(timeoutRef);
            }

            timeoutRef.current = window.setTimeout(async()=>{
                try {
                    const response = await fn(...params);
                    resolve(response);
                } catch(e) {
                    reject(e);
                }
            }, delay);
        });
    }
    return handler;
}

export default useDebouncedPromise;