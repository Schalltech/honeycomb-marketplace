import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import ImageViewModel from './components/image/image.view-model';
import ImageView from './components/image/image.view';

const App = observer((props) => {

  const {
    micro,
  } = props;

  const [state] = useState({
    dataContext: new ImageViewModel(micro),
  });

  const { dataContext } = state;

  return (
    <ImageView
      vm={dataContext}
    />
  );
});

App.propTypes = {
  micro: PropTypes.object.isRequired,
};

export default App;
