import React from "react";
import { connect } from "react-redux";
import contactActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
    return (
        <label>Find contacts by name <br />
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange} />
        </label>
    );
}
    
const mapStateToProps = state => ({
    value: state.contacts.filter
  });
  
  const mapDispatchToProps = dispatch => ({
    onChange: (e)=> dispatch(contactActions.changeFilter(e.target.value))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);