import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array,
  };

  render() {
    //let colorsArr = this.props.colors;
    /*
    //Reduce Version

    let coloredDiv = colors.reduce((total, currentValue, index, colors) => {
            total = <div
                data = {index}
                key={index}
                style={{border: `solid 3px ${colors[index]}`, padding: "10px"}}
                children = {(index === 0) ? this.props.children : total} />;
        return total;
    }, 0);
  */


//Recursive Version


    if (this.props.colors.length === 0)
      return this.props.children;
    else {
      console.log(this.props.colors.length);
      console.log(this.props.colors[this.props.colors.length-1]);
      return (
      <div style={{border: `3px solid ${this.props.colors[this.props.colors.length-1]}`, padding: '10px'}}>
        <RainbowFrame colors={this.props.colors.slice(0,-1)}>{this.props.children}</RainbowFrame>
      </div>
      )
    }

/*
   //For Version

   let code = this.props.children;
   for (let color of colorsArr) {
       code = <div key={colorsArr.indexOf(color)} style={{border: `3px solid ${color}`, padding: '10px'}}>{code}</div>
   }
*/
/* clear if For Version or Reduce Version
    return (
        <Fragment>
          {this.props.children}
        </Fragment>
    );

 */
  }

}

export default RainbowFrame;