import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';

import Navbar from './Components/Navbar';
import PlayerData from './Components/PlayerData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Navbar />
  );
  console.log(wrapper.debug())
});

it('PlayerData is rendering', () => {
  const playerWrapper = rtl.render(
    <PlayerData />
  );
  console.log(playerWrapper.debug())
});

