import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    const removeContactHandler = (id)=>{
        props.getContactId(id);
    }
    const renderedContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickedContactId={removeContactHandler} key={contact.id}/>    
        );
    });
    return (

            <div className="ui celled list">{renderedContactList}</div>
    )
}

export default ContactList;