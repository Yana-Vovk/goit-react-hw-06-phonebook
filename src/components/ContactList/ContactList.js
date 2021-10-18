import React from "react";
import { connect } from "react-redux";
import getContact from '../../utils/getContact';
import contactActions from '../../redux/contacts/contacts-actions';
import styles from '../Styles.module.css';
import { AiOutlineUser } from "react-icons/ai";
import shortid from "shortid";

function ContactList ({ contact, onDelete }) {
    return (
        <ul className={styles.ulContainer}>
            {contact.map(({ name, number })  => (
                <li className={styles.liItem} key={shortid.generate()}>
                    <span className={styles.spaceBetween}><AiOutlineUser/></span>
                    <span className={styles.spaceBetween}>{name}: </span>
                    <span className={styles.spaceBetween}>{number} </span>
                    <button className={styles.delBtn} type="button" onClick={() => onDelete(name)}>Delete</button>
                </li>))}
        </ul>
    );
}; 


const mapStateToProps = ({contacts: {filter, items}}) => ({
    contact:  getContact(filter, items) 
});

const mapDispatchToProps = dispatch => ({
    onDelete: (name)=> dispatch(contactActions.deleteContact(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);