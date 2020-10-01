import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import ButtonViewModel from './components/button/button.view-model';
import ButtonView from './components/button/button.view';

const App = observer((props) => {

  const {
    micro,
  } = props;

  const [state] = useState({
    dataContext: new ButtonViewModel(micro),
  });

  const { dataContext } = state;

  return (
    <ButtonView vm={dataContext} />
  );
});

App.propTypes = {
  micro: PropTypes.object.isRequired,
};

export default App;
