import { Plugin } from '../models/plugin';

export default class PluginRepository {

  private _plugins = [
    new Plugin(1, 'Plugin 1'),
    new Plugin(2, 'Plugin 2'),
    new Plugin(3, 'Plugin 3')
  ];

  retrieveAll(): Promise<Plugin[]> {
    return new Promise((resolve, reject) => {
      resolve(this._plugins);
    });
  }
}