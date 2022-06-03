import React ,{ useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

// const contacts = [
//     {id: 1, name: 'js', email: 'js@gmali.com'}
// ]
const ContactList = (props) => {
    const searchEle = useRef("");
    console.log(props)
    const removeContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderedContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickedContactId={removeContactHandler} key={contact.id} />
        );
    });

    const getSearchTerm = (e)=>{
        console.log("ele", searchEle);
        // props.searchKeyWord(e.target.value);
        // [or]
        props.searchKeyWord(searchEle.current.value);
    }


    return (
        <div className="contact-list-pane">
            <div style={{ textAlign: 'right' }}>
                <Link to="/add"><button className="ui button blue" >Add</button></Link>
            </div>

            <div className="ui search">
                    <div className="ui icon input" style={{ width: '100%', marginTop: '10px' }}>
                        <input ref={searchEle} type="text" className="prompt" placeholder="Search" onChange={getSearchTerm} value={props.term} />
                        <i className="search icon"></i>
                    </div>

                </div>
            {renderedContactList.length > 0 ?              
                <div className="ui celled list"> {renderedContactList}</div> :
                <div className="empty-records">No Records Available</div>
            }
        </div>
    )
}

export default ContactList;