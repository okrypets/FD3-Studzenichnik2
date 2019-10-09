import React from 'react';
import PropTypes from 'prop-types';

import Br2JSX from './Br2JSX';

class Br2JSXBlock extends React.Component {

  static propTypes = {
      text: PropTypes.string,
  };

  state = {

  };

 render() {
     let text=`первый<br>второй<br/>третий<br />последний`;
     return <Br2JSX text={text}/>;
  }

}

export default Br2JSXBlock;
