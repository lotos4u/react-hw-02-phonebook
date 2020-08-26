import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };

    handleChangeName = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value,
        });
    }

    handleChangeNumber = (e) => {
        this.setState({
            ...this.state,
            number: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd({
            id: uuidv4(),
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name: '',
            number: '',
        });
    }

    render() {
        return (
            <>
                <label>
                    Name
                    <input type='text' value={this.state.name} onChange={(e) => this.handleChangeName(e)}/>
                </label>
                <label>
                    Number
                    <input type='text' value={this.state.number} onChange={(e) => this.handleChangeNumber(e)}/>
                </label>
                <button disabled={!this.state.name || !this.state.number}
                        onClick={(e) => this.handleSubmit(e)}>Add contact</button>
            </>
        );
    }
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

ContactForm.defaultProps = {}

export default ContactForm;