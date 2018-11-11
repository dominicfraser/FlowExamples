import React from 'react';
import PropTypes from 'prop-types';
import { BpkList, BpkListItem } from 'bpk-component-list';
import BpkPopover from 'bpk-component-popover';

import defaultStrings from '../../strings/default-strings';

const ListPopover = ({ strings, onClose, isOpen, target }) => (
  <BpkPopover
    id="list-popover"
    onClose={onClose}
    isOpen={isOpen}
    label="List bullet points"
    closeButtonText={strings.banner_close_btn}
    target={target}
  >
    <BpkList>
      <BpkListItem>{strings.list_item_one}</BpkListItem>
      <BpkListItem>{strings.list_item_two}</BpkListItem>
      <BpkListItem>{strings.list_item_three}</BpkListItem>
    </BpkList>
  </BpkPopover>
);

ListPopover.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  target: PropTypes.func.isRequired,
};

ListPopover.defaultProps = {
  strings: defaultStrings,
  isOpen: false,
};
export default ListPopover;
