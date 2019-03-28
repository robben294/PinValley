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
        this.renderErrors = this.renderErrors.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal).catch(this.setState({'password': ''}));
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
                            <br />
                            <button>{this.props.formType}</button>
                        </form>
                        <a className="login-OR">OR</a>
                        <button className="login-demo">DEMO LOGIN</button>
                        <br />
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
                            <button onClick={this.renderErrors}>{this.props.formType}</button>
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