import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

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
            <div className={styles.formContainer}>
                <label className={styles.label}>
                    Filter contacts by name
                    <input className={styles.input} type='text' value={this.state.filter} onChange={(e) => this.handleChangeFilter(e)}/>
                </label>
            </div>
        );
    }
}

FilterForm.propTypes = {
    onFilter: PropTypes.func.isRequired,
}

FilterForm.defaultProps = {}

export default FilterForm;