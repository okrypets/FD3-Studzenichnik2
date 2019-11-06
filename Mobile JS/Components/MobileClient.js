import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

    static propTypes = {
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        })
    };

    state = {
        info: this.props.info,
    };

    componentWillReceiveProps = (newProps) => {
        this.setState({info:newProps.info});
    };

    editClicked = (EO) => {
        mobileEvents.emit('EMobileClientEditClicked',this.props.info);
    };

    removeClicked = (EO) => {
        mobileEvents.emit('EMobileClientRemoveClicked',this.props.info);
    };

    render() {
        console.log(`MobileClient id=${this.state.info.id} render`);
    
    return (
        <tr>
          <td>
            {this.state.info.fam}
          </td>
          <td>
            {this.state.info.im}
          </td>
          <td>
            {this.state.info.otch}
          </td>
          <td style={{textAlign: "center"}}>
            {this.state.info.balance}
          </td>
          <td style={
              {
                  backgroundColor: (this.state.info.balance >= 0) ? "green" : "red",
                  textAlign: "center",
                  color: "#fff",
              }
          }>
            {(this.state.info.balance >= 0) ? "Active" : "Blocked"}
          </td>
          <td style={{textAlign: "center"}}>
            <input
                className="edit"
                type = 'button'
                value = 'Редактировать'
                onClick={this.editClicked}
            />
          </td>
          <td style={{textAlign: "center"}}>
            <input
                className="delete"
                type = 'button'
                value = 'Удалить'
                onClick={this.removeClicked}
            />
          </td>
        </tr>
    );

  }

}

export default MobileClient;
