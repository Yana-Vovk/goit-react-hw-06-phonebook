import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import styles from './components/Styles.module.css';

function App() {
    
  return (
    <div className={styles.Container}>
        <div>
          <h1 className={styles.ContainerHeading}>Phonebook</h1>
          <ContactForm/>
        </div>
        <div>
          <h2 className={styles.ContainerHeading}>Contacts</h2>
          <div className={styles.boxFrame}>
          <Filter/>
          <ContactList/>
            </div>
        </div>
      </div> 
  );
}

export default App;


