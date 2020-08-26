import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = (props) => {
    return (
        <>
            <h1>Name</h1>
            <button onClick={() => props.onSubmit('good')}>Add contact</button>
        </>
    );
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

ContactForm.defaultProps = {}

export default ContactForm;