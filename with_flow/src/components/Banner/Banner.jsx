// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import reactStringReplace from 'react-string-replace';

import STYLES from './Banner.module.scss';
import ListPopover from '../ListPopover';
import defaultStrings from '../../strings/default-strings';

type Props = {
  strings: { [string_key: string]: string },
  hideBannerClick: Function,
};

type State = {
  popoverIsOpen: boolean,
};

class Banner extends Component<Props, State> {
  static defaultProps = {
    strings: defaultStrings,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      popoverIsOpen: false,
    };

    this.stringWithPlaceholder = reactStringReplace(
      this.props.strings.banner_second,
      'popover list',
      () => (
        <BpkText
          onClick={this.togglePopover}
          onKeyDown={this.keyboardOnlyTogglePopover}
          tabIndex={0}
          role="button"
          key="ListPopoverLink"
          textStyle="sm"
          className={STYLES.Banner__link}
          id="ListPopoverLink"
        >
          popover list
        </BpkText>
      ),
    );
  }

  stringWithPlaceholder: string;

  togglePopover = (): void => {
    this.setState(prevState => ({
      popoverIsOpen: !prevState.popoverIsOpen,
    }));
  };

  keyboardOnlyTogglePopover = (e: SyntheticKeyboardEvent<>): void => {
    // Enter and Spacebar
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      this.togglePopover();
    }
  };

  render() {
    const Popover: Node = (
      <ListPopover
        onClose={this.togglePopover}
        isOpen={this.state.popoverIsOpen}
        strings={this.props.strings}
        target={() => document.getElementById('ListPopoverLink')}
      />
    );

    return (
      <React.Fragment>
        <section className={STYLES.Banner}>
          <div className={STYLES.Banner__wrapper}>
            <div className={STYLES.Banner__text}>
              <BpkText tagName="p" textStyle="sm">
                {this.props.strings.banner_first}
                {this.stringWithPlaceholder}
                {Popover}
                {this.props.strings.banner_third}
              </BpkText>
            </div>
            <div className={STYLES.Banner__btn}>
              <BpkButton
                id="banner-ok-btn"
                onClick={this.props.hideBannerClick}
                secondary
              >
                {this.props.strings.banner_ok_btn}
              </BpkButton>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Banner;
