import { Log } from './../services/log';
import * as ws from 'ws';

/**
 * Common logic for socket controllers
 */
export abstract class BaseSocket {

    socket: any;

    constructor(config: any) {
        this.socket = new ws.Server(config);
    }

    onMessage(message: string) {
        Log.info('SOCKET', message);
    }

}
