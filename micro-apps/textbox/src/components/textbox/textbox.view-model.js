import {
  action, observable, decorate, computed,
} from 'mobx';
import { resolveBinding, updateBinding } from '@schalltech/honeycomb-core';
import TextboxModel from './textbox.model';

/**
 * This model manages the data presented to the view. All data manipulation should be
 * performed within this model. Any properties defined in this model will not appear in
 * the plugins configuration editor.
 */
class TextBoxViewModel extends TextboxModel {

  _text;

  get text() {
    if (this.textBinding) {

      const val = resolveBinding(this.DataStore, this.textBinding);

      if (val) {
        return val;
      }

      return '';
    }

    return this._text || '';
  }

  set text(value) {

    if (this.textBinding) {
      updateBinding(this.DataStore, this.textBinding, value);
    } else {
      this._text = value;
    }

    if (this.changeHandler) {
      this.changeHandler.Invoke();
    }
  }
}

decorate(TextBoxViewModel, {
  _text: observable,
  text: computed,
  textBinding: observable,
  placeholder: observable,
  resolveBinding: action,
});

export default TextBoxViewModel;
