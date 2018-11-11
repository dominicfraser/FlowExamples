import 'bpk-stylesheets/base';
import 'bpk-stylesheets/base.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Banner from './components/Banner';

const container = document.getElementById('root');

const hideBannerClick = e => {
  e.stopPropagation();
  ReactDOM.unmountComponentAtNode(container);
};

ReactDOM.render(React.createElement(Banner, { hideBannerClick }), container);
