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
        // if (this.props.errors.session !== []) {
        //     this.setState({ 'password': "" });
        // }
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
                    <div className="login-form">
                        <h3 className="login-header">Log in to see more</h3>
                        <p className="login-subtext">Access Pinterest's best ideas with a free account</p>
                        {this.renderErrors()}
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email' />
                            <br />
                            <input type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Password' />
                            <br />
                            <button>{this.props.formType}</button>
                        </form>
                        <br />
                        <a>Not on Pinvalley yet? {this.props.otherForm}</a>
                    </div>
                </div>
            )
        } else if (this.props.formType === 'Sign up') {
            return (
                <div className="login-main">
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <h3 className="login-header">Sign up to see more</h3>
                            <p className="login-subtext">Access Pinterest's best ideas with a free account</p>
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
                            <a>Already a menber? {this.props.otherForm}</a>
                        </form>
                    </div>
                    
                </div>
            )
        }
        
    }
}

export default SessionForm;