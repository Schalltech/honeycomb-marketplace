/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { action, decorate, observable } from 'mobx';
import CloudinaryModel from './cloudinary.model';
import ConfigurationService from '../../api/configuration.service';

/**
 * This model manages the data presented to the view. All data manipulation should be
 * performed within this model. Any properties defined in this model will not appear in
 * the plugins configuration editor
 */
class CloudinaryViewModel extends CloudinaryModel {

  constructor(micro) {
    super(micro);

    this.color = 'smooth-white-100';
    this.cord = false;
    this.options = [];

    this.getOptions = this.getOptions.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.updateCord = this.updateCord.bind(this);

    this.getOptions();
  }

  options;

  color;

  cord;

  getOptions() {
    ConfigurationService.getConfiguratorOptions().then((res) => {

      if (res?.data?.groups) {

        for (let i = 0; i < res.data.groups.length; i++) {

          if (res.data.groups[i].name === 'Ungrouped') {
            this.options = res.data.groups[i].options;
          }
        }
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  updateColor(name) {
    this.color = name.replace(/ /g, '-').toLowerCase();
  }

  updateCord(show) {
    this.cord = show;
  }
}

decorate(CloudinaryViewModel, {
  color: observable,
  cord: observable,
  options: observable,
  updateColor: action,
  updateCord: action,
  getOptions: action,
});

export default CloudinaryViewModel;
