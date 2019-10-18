import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

let DoubleButton = props => {
    return <div>
        <input type="button" value={props.caption1}/>
        {props.children}
        <input type="button" value={props.caption2}/>
    </div>
};

DoubleButton.propTypes = {
  colors: PropTypes.array,
  children: PropTypes.string,
    caption1: PropTypes.string,
    caption2: PropTypes.string,
};


export default DoubleButton;