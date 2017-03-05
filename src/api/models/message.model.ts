/**
 * Message information
 */
export interface IMessage {
  room: string;
  created: Date;
  from: string;
  to: string;
  message: string;
}

/**
 * Message model interface
 */
export interface IMessageModel extends IMessage {

}

/**
 * Message model implementation
 */
export class MessageModel {

};

export let Message = new MessageModel();
