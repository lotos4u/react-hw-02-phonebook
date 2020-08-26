import React from "react";
import PropTypes from "prop-types";

const ContactsItem = (props) => (
    <li>
        {props.name}: {props.number}
    </li>
)

ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default ContactsItem;