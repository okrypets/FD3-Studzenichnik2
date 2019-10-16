import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import { withRainbowFrame } from './withRainbowFrame';

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let withRainbowFrameColors = withRainbowFrame(colors);
let FramedFragment = withRainbowFrameColors(Fragment);

class RainbowBlock extends React.Component {

  static propTypes = {
      helloText: PropTypes.string,
      colors: PropTypes.array,
  };

 render() {
     return (
         <div className='RainbowBlock'>

             <FramedFragment>
                 {this.props.helloText}
             </FramedFragment>

         </div>
     );
  }
}

export default RainbowBlock;
