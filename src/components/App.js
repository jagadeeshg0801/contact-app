
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import * as React from 'react'
import  { useState, useEffect } from 'react';
import {   Route , Switch} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import ContactDetails from './ContactDetails';
import DeleteContact  from './DeleteContact';
// import {uuid} from 'uuidv4'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts_key'
  // const contacts =[
  //   {id: 1, name: 'Jagadeesh', email: 'Jagadeesh@gmail.com'},
  //   {id: 2, name: 'Jagadeesh1', email: 'Jagadeesh1@gmail.com'},
  // ]  Its a static data base implemention 

  /// using state
  const contactData = { email: '', name: '', id: '' };
  const [contacts, setContacts] = useState([]); // Initial Contacts Sate
  const addContactHandler = (contact) => {
    console.log('contact', contact)
    setContacts([...contacts, { id: new Date().getTime(), ...contact }]);  // Adding Contact here
  }

  const removeContact = (id) => {
    const newContactsList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  }



  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('retrievedContactsFromLocalStorage', retrievedContacts)
    if (retrievedContacts && retrievedContacts.length > 0)
      setContacts(retrievedContacts);

  }, []);



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);



  return (
    <div className='ui container'>
          <Header />
          <div>
            <Switch>
              <Route exact path='/'  render={(props)=> <ContactList contacts={contacts} {...props}   getContactId={removeContact}/>}></Route>
              <Route exact path="/add" render={(props) => <AddContact addContactHandler={addContactHandler} contactData={contactData} {...props}/>} /> 
              <Route path="/contactDetails/:id" render={(props)=> <ContactDetails {...props}/>}/>
              <Route path="/deleteContact" render={(props)=> <DeleteContact {...props} clickedContactId={removeContact}/>} />
              <Route path="*" render={()=> <ErrorPage/>} ></Route>
            </Switch>
          </div>
      {/* <AddContact addContactHandler={addContactHandler} contactData={contactData}/>
        <ContactList contacts={contacts}   getContactId={removeContact} /> */}


    </div>
  );
}
export default App;
