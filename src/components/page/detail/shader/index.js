import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';

import close from 'assert/img/otherImgs/close.png';

// import {Icon} from 'antd';

export default class Shader extends React.Component {
  static propsTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const shaderProps = {
      className: css.shader,
      onClick: e => {
        this.props.onClick();
      },
    };

    const iconProps = {
      src: close,
      className: css.closeIcon,
    };

    const contentProps = {
      className: css.content,
      onClick: e => e.stopPropagation(),
    };

    return (
      <div {...shaderProps}>
        <div {...contentProps}>
          {this.props.children}
        </div>
        <img {...iconProps}/>
      </div>
    );
  }
}
