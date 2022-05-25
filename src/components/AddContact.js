import React from 'react';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        id: ''
    };
    isAdd = true;
    constructor(props) {
        super(props);
        console.log('props.location.state.contact', props)
        // if(props.)
        if(props.location.state){
            const { email, id, name } = props.location.state.contact;
            console.log("before state", this.state)
            this.state = { 'email': email, 'id': id, 'name': name };
            console.log("After state", this.state)
            this.isAdd = id ? false : true;
        }
    }

    addContact = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert('All fields are mandatory')
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' })
        console.log('props', this.props)
        this.props.history.push('/');
    }
    render() {
        return (
            <div className='main'>
                <form className='ui form' onSubmit={this.addContact}>
                    {
                        !this.isAdd ? (
                            <div className='field'>
                                <label>ID</label>
                                <input type='text' placeholder='Enter Name' name='id' disabled
                                    value={this.state.id} onChange={(e) => this.setState({ name: e.target.value })} />
                            </div>
                        ) : ''
                    }
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' placeholder='Enter Name' name='name'
                            value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='email' value={this.state.email} placeholder='Enter Email Id' name='email'
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className='ui button blue'> {this.isAdd ? 'Add' : 'Update'}</button>



                </form>
            </div>
        )
    }
}
export default AddContact;