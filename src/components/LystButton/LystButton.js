import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const LystButton = ({ btnProps }) => {
  const { txt, ...rest } = btnProps;
  return <Button {...rest}>{txt}</Button>;
};

const { string, shape, bool, object, node } = PropTypes;

LystButton.propTypes = {
  /** Button */
  btnProps: shape({
    txt: node,
    classes: object,
    color: string,
    disabled: bool,
    disabledFocusRipple: bool,
    disableRipple: bool,
    fullWidth: bool,
    href: string,
    mini: bool,
    size: string,
    variant: string
  })
};

LystButton.defaultProps = {
  btnProps: {
    txt: 'Default',
    color: 'primary',
    disabled: false,
    href: '/default',
    size: 'medium',
    variant: 'outlined'
  }
};

export default LystButton;
