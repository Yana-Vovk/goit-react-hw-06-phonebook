import React from "react";
import { connect } from "react-redux";
import contactActions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleChange }) => {
    return (
        <label>Find contacts by name <br />
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange} />
        </label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func,
}
    
const mapStateToProps = state => ({
    value: state.contacts.filter
  });
  
  const mapDispatchToProps = dispatch => ({
    onChange: (e)=> dispatch(contactActions.changeFilter(e.target.value))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);