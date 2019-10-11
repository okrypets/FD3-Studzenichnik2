//import React from 'react';
import React, { Fragment } from 'react';

import PropTypes from 'prop-types';


class Br2JSX extends React.Component {

  static propTypes = {
      text: PropTypes.string.isRequired,
  };
  
  render() {
      let textline = this.props.text.slice();
      let text = textline.replace(/(<br[\s\/]*>)/g, `\n`).split(`\n`);
      text = text.map((item, key) => <Fragment key ={key}>{item}{(key < text.length - 1) ?  <br/> : null}</Fragment>);
    return (
        <div className="Br2JSX">
            {text}
        </div>
    );
  }

}

export default Br2JSX;
