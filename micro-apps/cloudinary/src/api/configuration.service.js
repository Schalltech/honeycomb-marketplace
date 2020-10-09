import axios from 'axios';

class ConfigurationService {

  static getConfiguratorOptions() {

    return axios.get('https://www.blinds.com/catalog/productconfiguration/getconfiguratoroptions?productId=524032&autobahnProductId=524032');
  }
}

export default ConfigurationService;
