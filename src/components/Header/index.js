import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
import backImg from './images/back.png';
import shareImg from './images/share.png';

export default function Header(props) {
  const { title, backHandle, shareHandle } = props;
  return (
    <header>
      <img id="back" src={backImg} alt={title} onClick={() => backHandle()} />
      <div className="tit">{title}</div>
      <img id="share" src={shareImg} alt={title} onClick={() => shareHandle()} />
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  backHandle: PropTypes.func,
  shareHandle: PropTypes.func
};
