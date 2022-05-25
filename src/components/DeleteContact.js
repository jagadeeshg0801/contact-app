import React from 'react';
import {Link} from 'react-router-dom';

class DeleteContact extends React.Component {

    deleteContact = (e) => {
        console.log(this.props)
       this.props.clickedContactId(this.props.location.state.contact.id);
       this.props.history.push('/')
    }
    render() {
        const {name} = this.props.location.state.contact;
        console.log('props',  this.props)
        return (
            <div>
                <div className="main" >
                    <div className="ui  center-div">
                        <h3>Do you want to Delete the Contact Details For <b style={{color:'red'}}><u>{name}</u></b> !!</h3>
                         <Link to="/">
                             <button className='ui button red'>No</button>
                        </Link>
                        <button className='ui button blue' onClick={this.deleteContact}>Yes</button>
                        
                    </div>
                   
                </div>

            </div>
        )

    }

}

export default DeleteContact;