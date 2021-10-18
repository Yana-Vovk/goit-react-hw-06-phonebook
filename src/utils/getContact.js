const getContact = (value, contacts) => {   
    const normalizetext = value.toLowerCase();
      
    return contacts.filter(({name}) =>
              name.toLowerCase().includes(normalizetext)
      )
};
  
export default getContact; 