//import React from 'react';
import React, { Fragment } from 'react';

import PropTypes from 'prop-types';


class Br2JSX extends React.Component {

  static propTypes = {
      text: PropTypes.string.isRequired,
  };
  
  render() {
      /* --- Old Version
      let textline = this.props.text.slice();
      let text = textline.replace(/(<br[\s\/]*>)/g, `\n`).split(`\n`);
      text = text.map((item, key) => <Fragment key ={key}>{item}{(key < text.length - 1) ?  <br/> : null}</Fragment>);*/



      let textArr = this.props.text.split(/(<br\s*\/?>)/g);
      let newTextArr = [];

          for (let item of textArr ) {
              newTextArr.push(<Fragment key ={textArr.indexOf(item)}>{item.match(/(<br\s*\/?>)/) ? <br /> : item}</Fragment>);
          }

    return (
        <div className="Br2JSX">
            {newTextArr}
        </div>
    );
  }

}

export default Br2JSX;
