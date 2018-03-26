import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function Card(props) {
  const {
    img, num, state, text 
  } = props;
  const src = require(`./images/${img}.png`);
  return (
    <div className="card">
      <div className="img">
        <img src={src} alt="" />
      </div>
      <div className="des">
        <div className="tit">
          <span className="num">{num}</span>
          <span className="state">{state}</span>
        </div>
        <div className="text">
          {text}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  num: PropTypes.string,
  state: PropTypes.string,
  text: PropTypes.string
};
