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

  private usersConnected: number;

  constructor(config: any) {
    super(config);
    this.socket.on('connection', (ws: any) => {
      this.usersConnected++;
      const location = url.parse(ws.upgradeReq.url, true);
      Log.info('SOCKET', 'Socket connection with token ' + chalk.gray(location.query.access_token));

      // START: Testing tokens -----------
      let token = jwt.sign({name: 'iostreamer'}, 'secret-key', {
        expiresIn : 15 * 24 * 60 * 60 * 1000 // 15 days
      });
      Log.info('TOKEN', 'Signed: ' + chalk.gray(token));

      jwt.verify(token, 'secret-key', function(err, decoded) {
        Log.info('TOKEN', 'Verified: ' + chalk.gray(decoded.name));
      });
      // END: Testing tokens -------------

      ws.on('message', (message: any) => {
        Log.info('SOCKET', 'Socket message: ' + chalk.gray(message));
      });

      let me = this;
      ws.on('close', function(reasonCode: any, description: any) {
        me.usersConnected--;
        Log.info('SOCKET', 'Peer disconnected.');
      });
    });
  }
}
