import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import CloudinaryViewModel from './components/cloudinary/cloudinary.view-model';
import CloudinaryView from './components/cloudinary/cloudinary.view';

const App = observer((props) => {

  const {
    micro,
  } = props;

  const [state] = useState({
    dataContext: new CloudinaryViewModel(micro),
  });

  const { dataContext } = state;

  return (
    <CloudinaryView
      vm={dataContext}
    />
  );
});

App.propTypes = {
  micro: PropTypes.object.isRequired,
};

export default App;
