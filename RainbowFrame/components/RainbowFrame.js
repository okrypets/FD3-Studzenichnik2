import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array,
  };
  
  render() {
      let colors = this.props.colors.slice();
      let coloredDiv = colors.reduce((total, currentValue, index, colors) => {
              total = <div
                  data = {index}
                  key={index}
                  style={{border: `solid 3px ${colors[index]}`, padding: "10px"}}
                  children = {(index === 0) ? this.props.children : total} />;
          return total;
      }, 0);


    return (
        <Fragment>
        {coloredDiv}
        </Fragment>
    );
  }

}

export default RainbowFrame;
