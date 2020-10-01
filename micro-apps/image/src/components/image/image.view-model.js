/* eslint-disable object-curly-newline */
/* eslint-disable dot-notation */
import { action, observable, decorate, computed } from 'mobx';
import { resolveBinding } from '@schalltech/honeycomb-core';
import ImageModel from './image.model';

/**
 * This model manages the data presented to the view. All data manipulation should be
 * performed within this model. Any properties defined in this model will not appear in
 * the plugins configuration editor.
 */
class ImageViewModel extends ImageModel {

  constructor(micro) {
    super(micro);

    this.onClick = this.onClick.bind(this);
  }

  micro;

  get source() {

    if (this.SourceBinding) {
      return resolveBinding(this.DataStore, this.SourceBinding);
    }

    return this.DefaultSource;
  }

  onClick() {
    this.ClickHandler.Invoke();
  }
}

decorate(ImageViewModel, {
  source: computed,
  resolveBinding: action,
  onClick: action,
  SourceBinding: observable,
  DefaultSource: observable,
});

export default ImageViewModel;
