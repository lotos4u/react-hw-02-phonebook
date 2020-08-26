import React, {Component} from 'react';
import './App.css';
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import FilterForm from "./components/FilterForm";

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    };

    handleSubmit = (contact) => {
        const newContacts = this.state.contacts;
        newContacts.push(contact);
        this.setState({
            ...this.state,
            contacts: newContacts,
        });
    };

    getFilteredContacts() {
        if (!this.state.filter) {
            return this.state.contacts;
        }
        return this.state.contacts.filter(c => c.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }

    handleFilter(filter) {
        this.setState({
            ...this.state,
            filter: filter,
        });
    }

    render() {
        return <>
            <h1>Phonebook</h1>
            <ContactForm onAdd={this.handleSubmit}/>
            <h1>Contacts</h1>
            <FilterForm onFilter={(f) => this.handleFilter(f)}/>
            <ContactsList contacts={this.getFilteredContacts()}/>
        </>;
    }
}

export default App;
