import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RainbowFrame = props => {

  let colors = props.colors;
  let color = colors[colors.length -1];
  if (props.colors.length === 0)
    return props.children;
  else {
    return (
        <div
            key={colors.indexOf(color)}
            data-id={colors.indexOf(color)}
            style={
              {
                borderWidth: 5,
                borderStyle: 'solid',
                borderColor: color,
                padding: 10,
              }
            }
        >
          <RainbowFrame colors={colors.slice(0, -1)}>{props.children}</RainbowFrame>
        </div>
    )
  }

};

RainbowFrame.propTypes = {
  colors: PropTypes.array,
  children: PropTypes.object,
};


export default RainbowFrame;