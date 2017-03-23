import React from 'react';
import { render } from 'react-dom';
//import { AppContainer } from 'react-hot-loader';
import TodoApp from './app.js';

//render( <AppContainer><App/></AppContainer>, document.querySelector("#app"));

render( <TodoApp/>, document.querySelector("#app"));

/*if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}*/
