// TODO: In the original chat app the models are at the level with app and server, do we want this?
// https://github.com/jussikinnula/angular2-socketio-chat-example/tree/master/src

import { Message } from '../models';

export class MessageSocket {
  nsp: any;
  name: string;
  data: any;
  socket: any;

  constructor(io: any, private room: string) {
    this.nsp = io.of('/messages/' + encodeURIComponent(this.room));
    this.nsp.on('connection', (socket: any) => {
      console.log('Socket: client connected to room ', this.room);
      this.socket = socket;
      this.listen();
    });
  }

  // Add signal
  private listen(): void {
    this.socket.on('disconnect', () => this.disconnect());
    this.socket.on('create', (message: Message) => this.create(message));
    this.socket.on('list', () => this.list());
  }

  // Handle disconnect
  private disconnect(): void {
    console.log('Socket: client disconnected from room ', this.room);
  }

  // Create a message in a room
  private create(message: Message): void {
    // Message.create(message, (error: any, msg: IMessage) => {
    //   if (!error && msg) {
    //     this.nsp.emit('create', msg); // TODO: originally this was shadowed variable, is msg correct? test!
    //   }
    // });
  }

  // List all messages in a room
  private list(): void {
    // if (this.socket && this.socket.connected) {
    //   Message
    //     .find({
    //       room: this.room
    //     }) // Find messages only in this room
    //     .sort({
    //       created: -1
    //     }) // Sort newest messages first
    //     .limit(25) // Limit to 25 first results
    //     .exec(
    //       (error: any, messages: IMessage[]) => {
    //         for (let message of messages.reverse()) {
    //           this.socket.emit('create', message);
    //         }
    //       }
    //     );
    // }
  }
}
