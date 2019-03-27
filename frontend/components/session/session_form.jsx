import React from 'react';

class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    render() {
        if (this.props.formType === 'Log in') {
            return (
                <div>
                    <h2>Log in to see more</h2>
                    <p>Access Pinterest's best ideas with a free account</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email'/>
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Password'/>

                        <button>{this.props.formType}</button>
                    </form>
                </div>
            )
        } else if (this.props.formType === 'Sign up') {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email'/>
                        <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Create a password'/>
                        <input type="text" value={this.state.firstname} onChange={this.handleUpdate('firstname')} placeholder='First name' />
                        <input type="text" value={this.state.lastname} onChange={this.handleUpdate('lastname')} placeholder='Last name'/>
                        <button>{this.props.formType}</button>
                    </form>
                </div>
            )
        }
        
    }
}

export default SessionForm;