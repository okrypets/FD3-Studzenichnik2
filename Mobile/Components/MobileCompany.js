import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import ADDEditMobileClient from './ADDEditMobileClient';
import {mobileEvents} from './events';

import './MobileCompany.css';

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

    buttonClickedFilterAll = () => {
       this.setState({
           clients: this.state.clients,
           isFiltered: false,
           filteredClients: [],
       });
    };
    buttonClickedFilterActive = () => {
        let filteredClientsActive = this.state.clients.filter(i => i.balance > 0);
        this.setState({
            filteredClients:filteredClientsActive,
            isFiltered: true
            }
        );
    };
    buttonClickedFilterBlocked = () => {
        let filteredClientsBlocked = this.state.clients.filter(i => i.balance < 0);
        this.setState({
            filteredClients: filteredClientsBlocked,
            isFiltered: true
        }
        );
    };

    buttonEditClicked = (info) => {
        this.setState({workMode: 1});
        this.setState({editedInfo: info});

    };
    editedMobileClient = (editedClient) => {
        this.setState({editedInfo: editedClient, workMode: 0});
        this.editMobileClient(editedClient, this.state.workMode);
    };

    onCancelButtonClick = () => {
        this.setState({editedInfo: null, workMode: 0});
    };

    buttonRemoveClicked = (removeClient) => {

        if (confirm('Delete ?')) {
            let delClient=[...this.state.clients]; // копия самого массива клиентов
            // если в окне нажали ОК -
            //удаляем с помощью splice 1 строку в массиве в стейте по индексу. Индекс получаем сравнивая передаваемый код при клике и код в строке.
            delClient.splice(delClient.findIndex(i => i.id === removeClient.id), 1);
            //устанавливаем в стейт полученный массив после удаления
            this.setState({clients:delClient, isFiltered: false});

        }
    };

    buttonAddClicked = (EO) => {

        let newId;
        (this.state.clients.length === 0) ? newId = 0
            :
            newId = this.state.clients.reduce((prev,cur) => {
                    return (prev.id > cur.id) ? prev.id : cur.id
            });

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
            newID: newId+1,
        }));
    };

    setName1 = () => {
        this.setState({name:'МТС'});
    };

    setName2 = () => {
        this.setState({name:'Velcom'});
    };

    editMobileClient = (client, WorkMode) => {
        let changed=false;
        //console.log(client.id);
        let newClients=[...this.state.clients]; // копия самого массива клиентов
         if (newClients.some(cl => cl.id === client.id )) {
             newClients.forEach( (c,i) => {
                 if ( c.id === client.id && c!==client) {
                     newClients[i]={...client};
                     changed=true;
                 }
             } );
        } else {
            newClients=[...this.state.clients, client];
            changed=true;
        }


        if (WorkMode)
            changed=true;

        if ( changed )
            this.setState({
                clients:newClients,
                editedInfo: null,
                isFiltered: false,
            });
    };
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
        <input type="button" value="Добавить" onClick = {this.buttonAddClicked} />
        {(this.state.workMode === 1 || this.state.workMode === 2) && <ADDEditMobileClient info={this.state.editedInfo} newID={this.state.newID} workMode = {this.state.workMode}/>}
      </div>
    )
    ;

  }

}

export default MobileCompany;
