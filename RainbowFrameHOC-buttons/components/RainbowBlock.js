import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import { withRainbowFrame } from './withRainbowFrame';
import DoubleButton from "./DoubleButton";

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let RainbowDoubleButton = withRainbowFrame(colors)(DoubleButton);
class RainbowBlock extends React.Component {

  static propTypes = {
      colors: PropTypes.array,
      caption1: PropTypes.string,
      caption2: PropTypes.string,
  };


 render() {

     return (

         <div className='RainbowBlock'>
             <RainbowDoubleButton caption1="hello" caption2="goodbye" >
                 it's my life
             </ RainbowDoubleButton>
         </div>


     );
  }
}

export default RainbowBlock;
