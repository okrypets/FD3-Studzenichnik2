import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ADDEditMobileClient from './ADDEditMobileClient';
import {mobileEvents} from './events';
import {Modules} from '../moduls/Modules';

import './MobileCompany.css';

let ModelMobileCompany = new Modules();


class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            })
        ),
        workMode: PropTypes.number,
        info: PropTypes.object,
    };

    state = {
        editedInfo: null,
        newID: this.props.clients.length+1,
        name: this.props.name,
        clients: this.props.clients,
        filteredClients: [],
        isFiltered: false,
        workMode: 0, // 1- редактировать, 2- добавить.

    };


    componentDidMount = () => {
        mobileEvents.addListener('EMobileClientEditClicked',this.buttonEditClicked);
        mobileEvents.addListener('EMobileClientRemoveClicked',this.buttonRemoveClicked);
        mobileEvents.addListener('EMobileClientOnButtonSaveClick',this.editedMobileClient);
        mobileEvents.addListener('EMobileClientOnButtonCancelClick',this.onCancelButtonClick);
    };

    componentWillUnmount = () => {
        mobileEvents.removeListener('EMobileClientEditClicked',this.buttonEditClicked);
        mobileEvents.removeListener('EMobileClientRemoveClicked',this.buttonRemoveClicked);
        mobileEvents.removeListener('EMobileClientOnButtonSaveClick',this.editedMobileClient);
        mobileEvents.removeListener('EMobileClientOnButtonCancelClick',this.onCancelButtonClick);
    };
/*--------------Filter------------*/
    buttonClickedFilterAll = () => {
       this.setState({
           clients: this.state.clients,
           isFiltered: false,
           filteredClients: [],
       });
    };
    buttonClickedFilterActive = () => {
        //console.log("buttonClickedFilterActive");
        this.setMobileClients();
        ModelMobileCompany.getActiveClients();
        this.setState({
            filteredClients: ModelMobileCompany.getActiveClients(),
            isFiltered: true
            }
        );
    };
    buttonClickedFilterBlocked = () => {
        this.setMobileClients();
        ModelMobileCompany.getBlockedClients();
        this.setState({
            filteredClients: ModelMobileCompany.getBlockedClients(),
            isFiltered: true
        }
        );
    };
/*-------------- AND Filter------------*/
    buttonEditClicked = (info) => {
        this.setMobileClients();
        this.setState({
            workMode: 1,
            editedInfo: info,
        });

    };
    editedMobileClient = (editedClient) => {
        this.setMobileClients();
        ModelMobileCompany.setClient(editedClient);
        this.setState({
            editedInfo: editedClient,
            workMode: 0
            });
        this.getMobileClients();
    };

    onCancelButtonClick = () => {
        this.setState({editedInfo: null, workMode: 0});
    };

    buttonRemoveClicked = (removeClient) => {
        this.setMobileClients();
        ModelMobileCompany.deleteClient(removeClient.id);
        this.getMobileClients();
    };

    buttonAddClicked = () => {

        this.setMobileClients();
        this.setState(prevState => ({
            editedInfo: {
                ...prevState.editedInfo,
                id: 0,
                fam: '',
                im: '',
                otch: '',
                balance: 0,
            },
            workMode: 2,
            newID: ModelMobileCompany.setNewId(),
        }));
    };

    /*----Company Name----*/

    setName1 = () => {
        //console.log("setName1");
        ModelMobileCompany.setName(1);
        this.setName();
    };

    setName2 = () => {
        //console.log("setName2");
        ModelMobileCompany.setName(2);
        this.setName();
    };

    setName = () => {
        ModelMobileCompany.updateName();
        this.getName();
    };

    getName = () => {
        this.setState({name: ModelMobileCompany.getName()})
    };
    /*----End Company Name----*/

    /*----------setMobileClient--------------*/
    setMobileClients = () => {
    ModelMobileCompany.setClients([...this.state.clients]);
    };
    getMobileClients = () => {
        this.setState({
            clients: ModelMobileCompany.getClients(),
            isFiltered: false,
        });
    };
    /*----------AND setMobileClient--------------*/

    render() {
        console.log("MobileCompany render");

        let clientsArr=(!this.state.isFiltered ? [...this.state.clients] : [...this.state.filteredClients]).map( client => {
                return <MobileClient key={client.id} info={client}  />
             }
        );


    return (
      <div className='MobileCompany'>
        <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>

          <div className='FilterBlock'>
              <input type="button" value="Все" onClick = {this.buttonClickedFilterAll} />
              <input type="button" value="Активные" onClick = {this.buttonClickedFilterActive} />
              <input type="button" value="Заблокированные" onClick = {this.buttonClickedFilterBlocked} />
          </div>

        <div className='MobileCompanyClients'>
            <table className='MobileClients'>
                <tbody className='MobileClientsTable'>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Баланс</th>
                    <th>Статус</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
                    {clientsArr}
                </tbody>
            </table>
        </div>
        <input type="button" value="Добавить" onClick = {this.buttonAddClicked} className='add'/>
        {(this.state.workMode === 1 || this.state.workMode === 2) && <ADDEditMobileClient info={this.state.editedInfo} newID={this.state.newID} workMode = {this.state.workMode}/>}
      </div>
    )
    ;

  }

}

export default MobileCompany;
