import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import reactStringReplace from 'react-string-replace';

import STYLES from './Banner.module.scss';
import ListPopover from '../ListPopover';
import defaultStrings from '../../strings/default-strings';

class Banner extends Component {
  constructor(props) {
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

  togglePopover = () => {
    this.setState(prevState => ({
      popoverIsOpen: !prevState.popoverIsOpen,
    }));
  };

  keyboardOnlyTogglePopover = e => {
    // Enter and Spacebar
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      this.togglePopover();
    }
  };

  render() {
    const Popover = (
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

Banner.propTypes = {
  strings: PropTypes.objectOf(PropTypes.string),
  hideBannerClick: PropTypes.func.isRequired,
};

Banner.defaultProps = {
  strings: defaultStrings,
};

export default Banner;
