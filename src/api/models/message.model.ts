/**
 * Message information
 */
export interface Message {
  room: string;
  created: Date;
  from: string;
  to: string;
  message: string;
}
