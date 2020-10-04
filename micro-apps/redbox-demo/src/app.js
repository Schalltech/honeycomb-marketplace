import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import RedboxDemoViewModel from './components/redbox-demo/redbox-demo.view-model';
import RedboxDemoView from './components/redbox-demo/redbox-demo.view';

const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

const App = observer((props) => {

  const {
    micro,
  } = props;

  const [state] = useState({
    dataContext: new RedboxDemoViewModel(micro),
  });

  const isMobile = !useMediaQuery('(min-width: 500px)');
  const { dataContext } = state;

  useEffect(() => {

    dataContext.initialize();
  }, []);

  return (
    <RedboxDemoView
      vm={dataContext}
      isMobile={isMobile}
    />
  );
});

App.propTypes = {
  micro: PropTypes.object.isRequired,
};

export default App;
