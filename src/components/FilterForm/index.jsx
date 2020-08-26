import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FilterForm extends Component {

    state = {
        filter: '',
    };

    handleChangeFilter = (e) => {
        this.setState({
            ...this.state,
            filter: e.target.value,
        }, () => {
            this.props.onFilter(this.state.filter);
        });
    }

    render() {
        return (
            <>
                <label>
                    Filter contacts by name
                    <input type='text' value={this.state.filter} onChange={(e) => this.handleChangeFilter(e)}/>
                </label>
            </>
        );
    }
}

FilterForm.propTypes = {
    onFilter: PropTypes.func.isRequired,
}

FilterForm.defaultProps = {}

export default FilterForm;