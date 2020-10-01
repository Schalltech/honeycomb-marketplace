const axios = require('axios');

module.exports = {

    async call(endpoint, method, data, headers) {
  
      console.log(endpoint, method, data, headers);
        switch(method) {
            case 'POST':
                axios.post(endpoint, { ...data }, {
                  headers: {
                    ...headers,
                  },
                })
                .then(response => {
                  console.log('response', response);
                  console.log(" ");
                })
                .catch(error => {
                  throw Error(error);
                });
                break;
            default:
                throw Error(`Rest ${method} method is not supported.`);
        }
    },
};
