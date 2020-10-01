import { action, decorate, observable } from 'mobx';
import __MicroAppName__Model from './__MICRO_APP_NAME__.model';

/**
 * This model manages the data presented to the view. All data manipulation should be
 * performed within this model. Any properties defined in this model will not appear in
 * the plugins configuration editor.
 */
class __MicroAppName__ViewModel extends __MicroAppName__Model {

  constructor(micro) {
    super(micro);

    this.greeting = 'Hi, I am a Honeycomb micro app!';
    this.greet = this.greet.bind(this);
  }

  greeting;

  greet() {
    console.log(this.greeting);
  }
}

decorate(__MicroAppName__ViewModel, {
  greeting: observable,
  greet: action,
});

export default __MicroAppName__ViewModel;
