/**
 * Room information
 */
export interface IRoom {
    name: string;
    created: Date;
}

/**
 * Room model interface
 */
export interface IRoomModel extends IRoom { }

/**
 * Room model implementation
 */
export class RoomModel implements IRoomModel {
  id: number;
  name: string;
  created: Date;

  create() { }
  delete() { }
  find() { }
  retrieve() { }
  retrieveAll() { }
  update() { }
}

export let Room = new RoomModel();
