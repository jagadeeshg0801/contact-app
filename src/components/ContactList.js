import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom'

// const contacts = [
//     {id: 1, name: 'js', email: 'js@gmali.com'}
// ]
const ContactList = (props) => {
    const removeContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderedContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickedContactId={removeContactHandler} key={contact.id} />
        );
    });

    const isEmptyContacts = renderedContactList.length > 0 ? false : true;
    console.log('renderedContactList', renderedContactList)

    if (isEmptyContacts) {
        return (
            <div className="contact-list-pane">
            <div style={{ textAlign: 'right' }}>
                <Link to="/add"><button className="ui button blue " >Add</button></Link>
            </div>
            <div className="empty-records">No Records Available</div>
        </div>
           
        );
    } else {
        return (
            <div className="contact-list-pane">
                <div style={{ textAlign: 'right' }}>
                    <Link to="/add"><button className="ui button blue " >Add</button></Link>
                </div>
                <div className="ui celled list">{renderedContactList}</div>
            </div>
        )
    }
}

export default ContactList;