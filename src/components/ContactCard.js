import React from "react";
import user from './../images/user.png';
import { Link } from "react-router-dom";
const ContactCard = (props) => {
    const { email, name, id}= props.contact;

    return (
        <div className="item" > 
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <Link to={{pathname: `/contactDetails/${id}`, state: {contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <Link to={ {pathname:'/add', state: { contact: props.contact }} } >
                <i className="edit outline icon" style={{color: 'blue', float: 'right'}}></i>
            </Link>
            {/* Normal Delete code 
             <i className="trash alternate outline icon" style={{color:'red', float: 'right'}} onClick={()=> props.clickedContactId(id)}></i>
              */}

              {/* Delete Page navigation Code here */}
            <Link to={{pathname: `/deleteContact`, state: {contact: props.contact}}}>
                <i className="trash alternate outline icon" style={{color:'red', float: 'right'}}></i>
            </Link>
            
        </div>
    )
}

export default ContactCard;