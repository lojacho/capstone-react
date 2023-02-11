import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders qty to be render', () => {
  const topAnime = {
    pagination: {
      items: {
        count: 25,
      },
    },
  };

  const mockStore = configureStore();
  const store = mockStore(topAnime);
  const component = render(<Provider store={store}><Header topAnime={topAnime} /></Provider>);
  expect(component.container).toHaveTextContent(topAnime.pagination.items.count);
});
