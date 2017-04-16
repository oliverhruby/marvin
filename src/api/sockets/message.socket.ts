import { BaseSocket } from './base.socket';
import { Log } from '../services/log';
import * as chalk from 'chalk';
import * as jwt from 'jsonwebtoken';
import * as url from 'url';
import * as ws from 'ws';

/**
 * Socket controller for the main application chat
 */
export class MessageSocket extends BaseSocket {

   constructor(config: any) {
    super(config);
    this.socket.on('connection', (ws: any) => {
      this.clients++;

      let location = url.parse(ws.upgradeReq.url, true);
      let token = location.query.access_token;
      Log.info('SOCKET', 'Socket connection #' + this.clients + ' token: ' + chalk.gray(token));

      try {
        let user = jwt.decode(token, 'secret-key');
        // TODO: validate user
        Log.info('SOCKET', 'User identified: ' + chalk.gray(user.name));
      } catch (err) {
        ws.close();
        Log.error('SOCKET', 'Error decoding token: ' + err);
      }

      ws.on('message', (message: any) => {
        Log.info('SOCKET', 'Socket message: ' + chalk.gray(message));
      });

      let me = this;
      ws.on('close', function(reasonCode: any, description: any) {
        Log.info('SOCKET', 'Peer #' + me.clients + ' disconnected.');
        me.clients--;
      });
    });
  }
}
