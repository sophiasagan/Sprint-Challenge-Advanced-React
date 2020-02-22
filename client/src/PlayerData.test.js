import React from 'react';
import { render } from '@testing-library/react';
import PlayerData from './components/PlayerData';



test("Creates PlayerData component for each player", () => {
  const props = [
    { name: 'sophia', country: 'United States', searches: 3, key: 1 },
    { name: 'soraya', country: 'India', searches: 2, key: 1 }
  ]
  const { queryByText } = render(<PlayerData data={props} />)
  expect(queryByText(/sophia/i)).toBeTruthy();
  expect(queryByText(/soraya/i)).toBeTruthy();
});