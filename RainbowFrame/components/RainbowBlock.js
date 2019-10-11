import React from 'react';
import PropTypes from 'prop-types';

import RainbowFrame from './RainbowFrame';

class RainbowBlock extends React.Component {

  static propTypes = {
      helloText: PropTypes.string,
  };

 render() {
   let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];


    return (
      <div className='RainbowBlock'>

        <RainbowFrame colors={colors}>
          <span className='hello'>{this.props.helloText}</span>
        </RainbowFrame>

      </div>
    )
    ;

  }

}

export default RainbowBlock;
