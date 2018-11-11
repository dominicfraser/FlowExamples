// @flow
import React from 'react';
import { BpkList, BpkListItem } from 'bpk-component-list';
import BpkPopover from 'bpk-component-popover';

import defaultStrings from '../../strings/default-strings';

type Props = {
  strings: { [string_key: string]: string },
  onClose: Function,
  isOpen: boolean,
  target: Function,
};

const ListPopover = ({ strings, onClose, isOpen, target }: Props) => (
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

ListPopover.defaultProps = {
  strings: defaultStrings,
  isOpen: false,
};

export default ListPopover;
