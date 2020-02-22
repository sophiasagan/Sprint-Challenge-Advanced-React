import React from 'react';
import ReactDOM from 'react-dom';

import * as rtl from '@testing-library/react';

import Navbar from './Components/Navbar';




it('renders without crashing', () => {
  const wrapper = rtl.render(
    <Navbar />
  );
//   console.log(wrapper.debug())
});


