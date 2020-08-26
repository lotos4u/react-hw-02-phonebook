import React, {Component} from 'react';
import './App.css';
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

class App extends Component {
    state = {
        contacts: [],
        name: '',
        number: '',
    };

    handleSubmit = (contact) => {
        const newContacts = this.state.contacts;
        newContacts.push(contact);
        this.setState({
            ...this.state,
            contacts: newContacts,
        });
    };

    render() {
        return <>
            <h1>Phonebook</h1>
            <ContactForm onAdd={this.handleSubmit}/>
            <ContactsList contacts={this.state.contacts}/>
        </>;
    }
}

export default App;
