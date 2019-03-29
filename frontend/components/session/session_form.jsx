import React from 'react';
import Footer from '../footer/login_footer';

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

    componentWillMount() {
        this.props.clearSessionErrors();
    }

    createDemo(e) {
        e.preventDefault();
        // e.stopPropagation();
        this.setState({
            email: 'Hope you enjoy!',
            password: '111111',
        }, () => {
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(() => this.props.closeModal());
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
        const { errors } = this.props;
        const errs = errors.map(error => (
            error.split(" ")[0]
        ));

        if (this.props.formType === 'Log in') {
            return (
                <div>
                    <span className="other-form-top-left">{this.props.otherFormTopLeft}</span>
                    <div className="modal-main">
                        <div className="login-main">
                            <img src={window.logo} />
                            <div className="login-form">
                                <p className="login-header">Log in to see more</p>
                                <p className="login-subtext">Access PinValley's best ideas with a free account</p>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="email" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email' />
                                    {errs.includes('Email') ? <div className="auth-error">
                                        You missed a spot! Don't forget to add your email.
                                    </div> : null}
                                    <input minLength="6" type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Password' required />
                                    {errs.includes('Invalid') ? <div className="auth-error">Password you entered is incorrect. Try again.</div> : null}
                                    <button>{this.props.formType}</button>
                                    <a className="login-OR">OR</a>
                                    <button className="login-demo" onClick={this.createDemo}>Continue as a guest</button>
                                </form>
                                <span className="login-other-form">{this.props.otherForm}</span>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        } else if (this.props.formType === 'Sign up') {
            return (
                <div>
                    <span className="other-form-top-left">{this.props.otherFormTopLeft}</span>
                    <div className='modal-main'>
                        <div className="login-main">
                            <img src={window.logo} />
                            <div className="login-form">
                                <form onSubmit={this.handleSubmit}>
                                    <p className="login-header">Sign up to see more</p>
                                    <p className="login-subtext">Access PinValley's best ideas with a free account</p>
                                    <input type="email" value={this.state.email} onChange={this.handleUpdate('email')} placeholder='Email' />
                                    {errs.includes('Email') ? <div className="auth-error">Email can't be blank</div> : null}

                                    <input minLength="6" type="password" value={this.state.password} onChange={this.handleUpdate('password')} placeholder='Create a password' required />
                                    {errs.includes('Password') ? <div className="auth-error">Password can't be blank</div> : null}

                                    <input type="text" required="required" value={this.state.firstname} onChange={this.handleUpdate('firstname')} placeholder='First name' />
                                    {errs.includes('First') ? <div className="auth-error">First name can't be blank</div> : null}

                                    <input type="text" required="required" value={this.state.lastname} onChange={this.handleUpdate('lastname')} placeholder='Last name' />
                                    {errs.includes('Last') ? <div className="auth-error">Last name can't be blank</div> : null}

                                    <button>{this.props.formType}</button>
                                    <span className="login-other-form">{this.props.otherForm}</span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>        
            )
        }
        
    }
}

export default SessionForm;