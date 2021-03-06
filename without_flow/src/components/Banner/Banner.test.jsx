import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';

const mockFn = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner hideBannerClick={mockFn} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
