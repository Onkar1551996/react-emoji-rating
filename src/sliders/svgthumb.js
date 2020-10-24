import React from 'react';
import './css/svgthumb.css';

export default () => {

  let cssClasses = ["slider2val1", "slider2val2", "slider2val3", "slider2val4", "slider2val5"];

  const changeSvgClass = (e) => {
    let switchTo = e.target.value - 1;
    document.getElementById("slider2").className = cssClasses[switchTo];
  }

  return (
    <div className="slider-svg-container">
      <input type="range" min="1" max="5" defaultValue="3" name="slider" id="slider2" className="slider2val3" onChange={e => changeSvgClass(e)} />
    </div>
  );
}