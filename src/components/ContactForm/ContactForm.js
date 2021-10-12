import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../Styles.module.css';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);                
                break;
            
            default:
                return;
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };


    const handleSubmit = e => {
        e.preventDefault();
        onSubmit ( { name, number } );
        reset();
    }

     return (
            <form className={styles.boxFrame} onSubmit={handleSubmit}>
                <label>Name<br />
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </label><br />
                <label>Number<br />
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handleChange}
                    />
                </label> <br />
                <button type="submit">Add contact</button>
            </form>
        );
}
    
  



ContactForm.propTypes = {
    name:PropTypes.string,
    number:PropTypes.string,
}