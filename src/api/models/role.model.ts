export interface IRole {
  id: number;
  name: string;
}

export interface IRoleModel extends IRole {

}

export class RoleModel implements IRoleModel {
  id: number;
  name: string;

  create() { }
  delete() { }
  retrieve() { }
  retrieveAll() { }
  update() { }
}

export let Role = new RoleModel();
