import React, { Component } from 'react';

import Layaout from './components/Layaout/Layaout';
import BurgerBuilder from './conteiners/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <Layaout >
       <BurgerBuilder />
      </Layaout>
    );
  }
}

export default App;
