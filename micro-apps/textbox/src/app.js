import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import TextboxViewModel from './components/textbox/textbox.view-model';
import TextboxView from './components/textbox/textbox.view';

const App = observer((props) => {

  const {
    micro,
  } = props;

  const [state] = useState({
    dataContext: new TextboxViewModel(micro),
  });

  const { dataContext } = state;

  return (
    <TextboxView
      vm={dataContext}
    />
  );
});

App.propTypes = {
  micro: PropTypes.object.isRequired,
};

export default App;
