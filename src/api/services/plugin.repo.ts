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

  retrieve(id: number): Promise<Plugin> {
    return new Promise((resolve, reject) => {
      let plugin = this.getPlugin(id);
      if (plugin === null) {
        reject(`Invalid id: ${id}`);
      }
      resolve(plugin);
    });
  }

  create(plugin: Plugin): Promise<Plugin> {
    return new Promise((resolve, reject) => {
      if (this.getPlugin(plugin.id) !== null) {
        reject(`Plugin exists with id: ${plugin.id}`);
      }
      this._plugins.push(plugin);
      resolve(plugin);
    });
  }

  delete(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.getPlugin(id) === null) {
        reject(`Invalid id: ${id}`);
      }
      this._plugins.splice(id - 1, 1);
      resolve();
    });
  }

  update(plugin: Plugin): Promise<Plugin> {
    return new Promise((resolve, reject) => {
      let existingPlugin = this.getPlugin(plugin.id);
      if (existingPlugin === null) {
        reject(`Invalid id: ${plugin.id}`);
      }
      let index = this._plugins.indexOf(existingPlugin);
      this._plugins[index] = plugin;
      resolve(plugin);
    });
  }

  private getPlugin(id: number): Plugin | null {
    let plugins: Plugin[] = this._plugins
      .filter(u => u.id === id);
    if (plugins.length > 0) {
      return plugins[0];
    }
    return null;
  }

}
