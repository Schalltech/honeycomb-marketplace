import { PluginModel, EventHandlerFactory } from '@schalltech/honeycomb-core';

/**
 * This model defines the shape of the plugin configuration. All properties
 * defined in this class will appear in the plugins configuration editor.
 */
class ButtonModel extends PluginModel {

  constructor(micro) {
    super(micro);

    if (micro.model) {
      const { model } = micro;

      this.TextBinding = model.TextBinding;
      this.DefaultText = model.DefaultText;
      this.ImgSrc = model.ImgSrc;

      if (model.ClickHandler) {
        this.ClickHandler = EventHandlerFactory.create(model.ClickHandler, this.DataStore);
      }
    }
  }

  TextBinding;

  DefaultText;

  Path;

  ImgSrc;

  ClickHandler;
}

export default ButtonModel;
