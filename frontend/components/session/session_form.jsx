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
        this.createDemo = this.createDemo.bind(this);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    createDemo() {
        this.setState({
            email: 'Hope you enjoy!',
            password: '111111',
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal());
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    render() {
        if (this.props.formType === 'Log in') {
            return (
                <div className="login-main">
                    <img src={window.logo} />
                    <div className="login-form">
                        <p className="login-header">Log in to see more</p>
                        <p className="login-subtext">Access PinValley's best ideas with a free account</p>
                        {this.renderErrors()}
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email' />
                            <br />
                            <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Password' />
                            <button>{this.props.formType}</button>
                            <a className="login-OR">OR</a>
                            <button className="login-demo" onClick={this.createDemo}>Continue as a guest</button>
                        </form>
                        <span className="login-other-form">{this.props.otherForm}</span>
                    </div>
                </div>
            )
        } else if (this.props.formType === 'Sign up') {
            return (
                <div className="login-main">
                    <img src={window.logo} />
                    {this.renderErrors()}
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <p className="login-header">Sign up to see more</p>
                            <p className="login-subtext">Access PinValley's best ideas with a free account</p>
                            <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email' />
                            <br />
                            <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Create a password' />
                            <br />
                            <input type="text" value={this.state.firstname} onChange={this.handleUpdate('firstname')} placeholder='First name' />
                            <br />
                            <input type="text" value={this.state.lastname} onChange={this.handleUpdate('lastname')} placeholder='Last name' />
                            <br />
                            <button>{this.props.formType}</button>
                            <br />
                            <span className="login-other-form">{this.props.otherForm}</span>
                        </form>
                    </div>
                    
                </div>
            )
        }
        
    }
}

export default SessionForm;