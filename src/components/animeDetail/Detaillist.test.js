import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Detaillist from './Detaillist';

describe('Detaillist component', () => {
  it('renders the anime detail data', () => {
    const animeDetail = {
      title: 'My Title',
      images: {
        jpg: {
          large_image_url: 'https://example.com/image.jpg',
        },
      },
    };

    const { container } = render(
      <MemoryRouter>
        <Detaillist animeDetail={animeDetail} />
      </MemoryRouter>
    );

    expect(container.querySelector('h2').textContent).toBe(animeDetail.title);
    expect(container.querySelector('.containerSection')).toHaveStyle(
      'background-image: url(https://example.com/image.jpg)'
    );
  });
});
