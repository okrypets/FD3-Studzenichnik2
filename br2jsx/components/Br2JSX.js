//import React from 'react';
import React, { Fragment } from 'react';

import PropTypes from 'prop-types';


class Br2JSX extends React.Component {

  static propTypes = {
      text: PropTypes.string.isRequired,
  };
  
  render() {

      let text = this.props.text.replace(/(<br[\s\/]*>)/g, `\n`).split(`\n`).map((item, key) => <Fragment key ={key}>{item}<br/></Fragment>);

    return (
        <div className="Br2JSX">
            {text}
        </div>
    );
  }

}

export default Br2JSX;
