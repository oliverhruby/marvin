import { Log } from './../services/log';

export abstract class BaseSocket {

    constructor(ws: WebSocket) {

    }

    onMessage(message: string) {
        Log.info('SOCKET', message);
    }

}
