import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array,
  };
  
  render() {
      let colorsArr = this.props.colors;
      /* Old Version
      let coloredDiv = colors.reduce((total, currentValue, index, colors) => {
              total = <div
                  data = {index}
                  key={index}
                  style={{border: `solid 3px ${colors[index]}`, padding: "10px"}}
                  children = {(index === 0) ? this.props.children : total} />;
          return total;
      }, 0);
    */
      let code = this.props.children;
      for (let color of colorsArr) {
          code = <div key={colorsArr.indexOf(color)} style={{border: `3px solid ${color}`, padding: '10px'}}>{code}</div>
      }

    return (
        <Fragment>
        {code}
        </Fragment>
    );
  }

}

export default RainbowFrame;
