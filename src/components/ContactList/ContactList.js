import React from "react";
import { connect } from "react-redux";
import getContact from '../../utils/getContact';
import contactActions from '../../redux/contacts/contacts-actions';
import styles from '../Styles.module.css';
import { AiOutlineUser } from "react-icons/ai";
import shortid from "shortid";

function ContactList ({ contacts, onDeleteContact }) {
    return (
        <ul className={styles.ulContainer}>
            {contacts.map(contact => (
                <li className={styles.liItem} key={shortid.generate()}>
                    <span className={styles.spaceBetween}><AiOutlineUser/></span>
                    <span className={styles.spaceBetween}>{contact.name}: </span>
                    <span className={styles.spaceBetween}>{contact.number} </span>
                    <button className={styles.delBtn} type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    );
}; 


const mapStateToProps = ({contacts: {filter, items}}) => ({
    contact:  getContact(filter, items) 
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (name)=> dispatch(contactActions.deleteContact(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);