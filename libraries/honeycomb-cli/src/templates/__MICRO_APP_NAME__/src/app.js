import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import __MicroAppName__ViewModel from './components/__MICRO_APP_NAME__/__MICRO_APP_NAME__.view-model';
import __MicroAppName__View from './components/__MICRO_APP_NAME__/__MICRO_APP_NAME__.view';

const App = observer((props) => {

  const {
    micro,
  } = props;

  const [state] = useState({
    dataContext: new __MicroAppName__ViewModel(micro),
  });

  const { dataContext } = state;

  return (
    <__MicroAppName__View
      vm={dataContext}
    />
  );
});

App.propTypes = {
  micro: PropTypes.object.isRequired,
};

export default App;
