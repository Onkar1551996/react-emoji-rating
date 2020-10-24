import React, { useState } from 'react';
import './css/slidersvg.css';

export default () => {

  const [svgValue, setSvgValue] = useState('./emojis/confused.svg');
  let svgImages = ["./emojis/unhappy.svg", "./emojis/sad.svg", "./emojis/confused.svg", "./emojis/smiling.svg", "./emojis/happy.svg"];

  const changeSvg = (e) => {
    let switchTo = e.target.value -1;
    setSvgValue(svgImages[switchTo]);
  }

  return (
    <div className="slider-svg-container">
      <input type="range" min="1" max="5" defaultValue="3" name="slider" id="slider1" onChange={e => changeSvg(e)} />
      <img src={svgValue} id="emoji" alt="feelingsvg" />
    </div>
  );
}