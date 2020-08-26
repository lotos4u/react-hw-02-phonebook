import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactsItem from "../ContactItem";
import FilterForm from "../FilterForm";

class ContactsList extends Component {

    state = {
        filter: '',
    };

    handleFilter(filter) {
        this.setState({
            filter: filter,
        });
    }

    getFilteredContacts() {
        if (!this.state.filter) {
            return this.props.contacts;
        }
        return this.props.contacts.filter(c => c.name.includes(this.state.filter));
    }

    render() {
        return <>
            {this.props.contacts.length > 0 &&
            <>
                <h1>Contacts</h1>
                <FilterForm onFilter={(f) => this.handleFilter(f)}/>
                <ul>
                    {this.getFilteredContacts().map(item => <ContactsItem key={item.id} name={item.name} number={item.number}/>)}
                </ul>
            </>
            }
        </>
    }
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })).isRequired,
}

export default ContactsList;