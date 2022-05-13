import React from "react";
import user from './../images/user.png'
const ContactCard = (props) => {
    const { email, name, id}= props.contact;

    return (
        <div className="item" > 
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            {id} <i className="trash alternate outline icon" style={{color:'red', float: 'right'}} onClick={()=> props.clickedContactId(id)}></i>
        </div>
    )
}

export default ContactCard;