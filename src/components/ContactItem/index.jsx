import React from "react";
import PropTypes from "prop-types";

const ContactsItem = (props) => (
    <li>
        {props.name}: {props.number} <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </li>
)

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactsItem;