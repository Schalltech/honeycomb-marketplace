/* eslint-disable object-curly-newline */
/* eslint-disable dot-notation */
import { action, observable, decorate, computed } from 'mobx';
import { resolveBinding } from '@schalltech/honeycomb-core';
import ButtonModel from './button.model';

/**
 * This model manages the data presented to the view. All data manipulation should be
 * performed within this model. Any properties defined in this model will not appear in
 * the plugins configuration editor.
 */
class ButtonViewModel extends ButtonModel {

  constructor(micro) {
    super(micro);

    this.onClick = this.onClick.bind(this);
  }

  micro;

  get text() {
    if (this.TextBinding) {
      return resolveBinding(this.DataStore, this.TextBinding);
    }

    return this.DefaultText;
  }

  onClick() {
    this.ClickHandler.Invoke();
  }
}

decorate(ButtonViewModel, {
  text: computed,
  TextBinding: observable,
  onClick: action,
  resolveBinding: action,
});

export default ButtonViewModel;
