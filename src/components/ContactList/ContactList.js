import PropTypes from 'prop-types';
import styles from '../Styles.module.css';
import { AiOutlineUser } from "react-icons/ai";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.ulContainer}>
            {contacts.map(contact => (
                <li className={styles.liItem} key={contact.id}>
                    <span className={styles.spaceBetween}><AiOutlineUser/></span>
                    <span className={styles.spaceBetween}>{contact.name}: </span>
                    <span className={styles.spaceBetween}>{contact.number} </span>
                    <button className={styles.delBtn} type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts:PropTypes.array,
    onDeleteContact:PropTypes.func,
}

export default ContactList;