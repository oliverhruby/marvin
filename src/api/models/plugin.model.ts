/**
 * Plugin information
 */
export interface IPlugin {
  id: number;
  name: string;
}

/**
 * Plugin model interface
 */
export interface IPluginModel extends IPlugin { }

/**
 * Plugin model implementation
 */
export class PluginModel implements IPluginModel {
  id: number;
  name: string;

  create() { }
  delete() { }
  retrieve() { }
  retrieveAll() { }
  update() { }
}

export let Plugin = new PluginModel();
