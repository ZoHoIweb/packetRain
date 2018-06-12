import React from 'react';
import PropTypes from 'prop-types';

export default class Linear extends React.Component {
  render() {
    const props = {
      style: {
        width: '100%',
        height: '4px',
        background: '#DDD',
        margin: '0px',
        ...this.props.style,
      },
    };
    return <hr {...props} />;
  }
}
