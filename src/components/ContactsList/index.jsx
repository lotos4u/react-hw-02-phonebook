import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactsItem from "../ContactItem";

class ContactsList extends Component {

    state = {
        filter: '',
    };

    render() {
        return <>
            {this.props.contacts.length > 0 &&
            <>
                <ul>
                    {this.props.contacts.map(item => <ContactsItem key={item.id} name={item.name} number={item.number}/>)}
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