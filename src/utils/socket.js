import io from 'socket.io-client';
import { base_url } from './constants';

export const createSocketConnection = ()=>{
    return io(base_url);
}