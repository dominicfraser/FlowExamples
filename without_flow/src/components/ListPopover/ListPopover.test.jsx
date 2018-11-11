import React from 'react';
import { mount, shallow } from 'enzyme';

import ListPopover from './ListPopover';

const target = jest.fn();
const onClose = jest.fn();

describe('ListPopover', () => {
  it('renders correctly with default props', () => {
    const component = mount(<ListPopover target={target} onClose={onClose} />);
    expect(component.prop('isOpen')).toEqual(false);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('shallow renders correctly with given strings', () => {
    const strings = {
      list_item_one: 'first list item',
      list_item_two: 'second list item',
      list_item_three: 'third list item',
      banner_close_btn: 'Close',
    };

    const component = shallow(
      <ListPopover target={target} onClose={onClose} strings={strings} />,
    );

    expect(component).toMatchSnapshot();
  });
});
