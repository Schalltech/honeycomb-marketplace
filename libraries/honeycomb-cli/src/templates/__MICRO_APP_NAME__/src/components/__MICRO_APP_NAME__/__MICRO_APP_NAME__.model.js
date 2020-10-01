import { PluginModel } from '@schalltech/honeycomb-core';

/**
 * This model defines the shape of the plugin configuration. All properties
 * defined in this class will appear in the plugins configuration editor.
 */
class __MicroAppName__Model extends PluginModel {

  constructor(micro) {
    super(micro);

    if (micro.model) {
      const { model } = micro;

      this.Welcome = model.Welcome;
    }
  }

  Welcome;
}

export default __MicroAppName__Model;
