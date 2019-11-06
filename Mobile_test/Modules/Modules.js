"use strict";

//Исходные данные

let clients = [];
let client = {};
let name = 1;

//Model

class Modules {

    constructor() { // конструктор
        this.nameMTS = "МТС";
        this.nameVel = "Velcom";
        this.name = name; // название мобильной компании
        this.clients = clients; // массив клиентов
        this.client = client;
    }

/* ------------------ Company Name --------------*/

    setName(name) {
        console.log(this.name);
        this.name = name;
        console.log(name);
        this.updateName();
    }
    updateName() {
        // если 1 - нажата кнопка МТС, если 2 - нажата кнопка velcom
        if (this.name === 1 ) {
            //console.log(this.nameMTS);
            return this.nameMTS;
        } else if (this.name === 2) {
            //console.log(this.nameVel);
            return this.nameVel;
        }
    }
    getName() {
        console.log(this.updateName());
        return this.updateName();
    }

/* ------------------ AND Company Name --------------*/

/* ------------------ Clients Data --------------*/

    setClient(client) {
        this.client = client;
        this.isNewOrEditedClient();
    }

    // Определяем editedClient - редактируется или новый
    isNewOrEditedClient() {
        if(this.clients.some(cl => cl.id === this.client.id)) {
            this.updateClient();
        } else {
            this.addClient();
        }
    }

    setClients(clients) {
        this.clients = clients;
        //console.log(this.clients);
    }

    // Если КЛИЕНТ редактируемый - обновляем хэш редактируемого клиента в массиве
    updateClient() {
        //console.log(`${this.client.id} - редактируемый клиент`);
        this.clients.forEach( (c,i) => {
                if ( c.id === this.client.id && c!==client) {
                    this.clients[i]=this.client;
                }
            }
        );
    }

    // Если КЛИЕНТ новый -  добавляем хэш нового в общий массив клиентов
    addClient() {
        //console.log(`${this.client.id} - Новый клиент`);
        this.clients = [...this.clients, this.client];
    }


    getClients() {
        //console.log(this.clients);
        return this.clients;
    }

/* ------------------ AND Clients Data --------------*/

/* ------------------ filter --------------*/
    getActiveClients() {
        //console.log(this.clients);
        return this.clients.filter(i => i.balance > 0);
    }
    getBlockedClients() {
        return this.clients.filter(i => i.balance < 0);
    }

/* ------------------ and filter --------------*/

/*--------------Delete client-------------------------*/
// Удаление указанного клиента из массива
    deleteClient(id) {

        if (confirm('Delete ?')) {
// находим нужный объект в массиве по id и удаляем его методом splice
            this.clients.splice(this.clients.findIndex(i => i.id === id), 1);
            //console.log(this.clients);
        }
    }
/*--------------AND Delete client-------------------------*/

// устанавливаем новый id исходя из существующих
    setNewId() {

        let newId = 0;

// Если массив пустой - id 1,
// если не пустой - находим максимальный с помощью reduce - устанавливаем id максимального + 1
        if (this.clients.length !== 0) {
            newId = this.clients.reduce((prev,cur) => {
                    return (prev.id > cur.id) ? prev.id : cur.id
                }
            )
        }
        newId += 1;
        return newId;
    }



}



//let ModelMobileCompany = new Modules("МТС", "Velcom", name, clients, client);

//ModelMobileCompany.setName(name);
//ModelMobileCompany.getName();
//ModelMobileCompany.setClients(clients);
//ModelMobileCompany.setClient(client);
//ModelMobileCompany.getClients();
//ModelMobileCompany.isNewOrEditedClient();
//ModelMobileCompany.updateName();
//ModelMobileCompany.updateClient();
//ModelMobileCompany.setNewId();
//ModelMobileCompany.addClient();
//ModelMobileCompany.getActiveClients();
//ModelMobileCompany.getBlockedClients();
//ModelMobileCompany.deleteClient();



export default Modules;