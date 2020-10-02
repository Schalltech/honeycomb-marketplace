import { PluginModel, EventHandlerFactory } from '@schalltech/honeycomb-core';

/**
   * @class TextboxModel
   * @description Data model configuration for textbox micro apps.
   * @title Textbox
   * @mounts textbox
   * @extends PluginModel
   */
class TextboxModel extends PluginModel {

  /**
   * @constructs
   * @extends PluginModel
   */
  constructor(micro) {
    super(micro);

    if (micro.model) {
      const { model } = micro;

      this.textBinding = model.TextBinding;
      this.placeholder = model.Placeholder;

      if (model.ChangeHandler) {
        this.changeHandler = EventHandlerFactory.create(model.ChangeHandler, this.DataStore);
      }
    }
  }

  /**
   * @configurable true
   * @description A binding to the data containing the text for the textbox.
   * @type {string}
   * @member
   * */
  textBinding;

  /**
   * @configurable true
   * @description The value displayed as the textbox placeholder.
   * @type {string}
   * @member
   * */
  placeholder;

  /**
   * @configurable true
   * @category Events
   * @description Configurable change event handler.
   * @type {EventAction}
   * @member
   */
  changeHandler;
}

export default TextboxModel;
