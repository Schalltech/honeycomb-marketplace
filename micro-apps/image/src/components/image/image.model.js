import { PluginModel, EventHandlerFactory } from '@schalltech/honeycomb-core';

/**
   * @class ImageModel
   * @description Data model configuration for image micro apps.
   * @title Image
   * @mounts ma-image
   * @extends PluginModel
   */
class ImageModel extends PluginModel {

  /**
   * @constructs
   * @extends PluginModel
   */
  constructor(micro) {
    super(micro);

    if (micro.model) {
      const { model } = micro;

      this.Name = model.Name;
      this.DefaultSource = model.DefaultSource;
      this.Alt = model.Alt;
      this.SourceBinding = model.SourceBinding;

      if (model.ClickHandler) {
        this.ClickHandler = EventHandlerFactory.create(model.ClickHandler, this.DataStore);
      }
    }
  }

  /**
   * @configurable true
   * @description A binding to the data containing the url of the image.
   * @type {string}
   * @member
   * */
  SourceBinding;

  /**
   * @configurable true
   * @description Defines the uri the image will be loaded from when not using bindings.
   * @type {string}
   * @member
   */
  DefaultSource;

  /**
   * @configurable true
   * @description Discriptive text about the image.
   * @type {string}
   * @member
   */
  Alt;

  /**
   * @configurable true
   * @category Events
   * @description Configurable click event handler.
   * @type {EventAction}
   * @member
   */
  ClickHandler;
}

export default ImageModel;
