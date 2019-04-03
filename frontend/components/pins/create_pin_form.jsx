import React from 'react';
import { connect } from 'react-redux';

import { createPin } from '../../action/pin_actions';
import Navbar from '../nav_bar/nav_bar';

class CreatePinForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            website: '',
            photoFile: null,
            photoUrl: null,
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemovePhoto = this.handleRemovePhoto.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleRemovePhoto(e) {
        this.setState({ photoFile: null, photoUrl: null });
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
        formData.append('pin[title]', this.state.title);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[website]', this.state.website);
        formData.append('pin[author_id]', this.props.currentUser.id);
        this.props.createPin(formData);
    }

    render() {
        const {currentUser} = this.props;
        const preview = this.state.photoUrl ? <div className='create-pin-image-wrap'>
            <i className="fas fa-trash" onClick={this.handleRemovePhoto} ></i>
            <img className='create-pin-preview' src={this.state.photoUrl}/>
        </div> : null;
        return (
            <div>
                <Navbar />
                <div className='create-pin'>
                    <div className='create-pin-back'>
                        <i className="fas fa-chevron-left"></i>
                        <div className='create-pin-back-text'>Home</div>
                    </div>
                    <div className='create-pin-main'>
                        <div className='create-pin-save-container'>
                            <div className='create-pin-save' onClick={this.handleSubmit}>
                                <div className='create-pin-pin'>
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                                <div className='create-pin-save-text'>
                                    Save
                                </div>
                            </div>
                        </div>
                        <div className='create-pin-form'>
                            <div className='create-pin-upload-wrap'>
                                <div className='create-pin-photo'>
                                    {preview ? preview : <input type="file"
                                        onChange={this.handleFile} 
                                        className='create-pin-file-input'/>}
                                                                </div>
                            </div>
                            <div className='create-pin-text'> 
                                <div className='create-pin-title'>
                                    <input type="text"
                                        value={this.state.title}
                                        onChange={this.handleInput('title')}
                                        placeholder='Add your title'/>
                                </div>
                                <div className='create-pin-user'>
                                    <div className='create-pin-user-circle'>
                                        {currentUser.firstname[0]}
                                    </div>
                                    <div className='create-pin-user-name'>
                                        {currentUser.firstname} {currentUser.lastname}
                                    </div>
                                </div>
                                <div className='create-pin-des-web'>
                                    <input type="text"
                                        value={this.state.description}
                                        onChange={this.handleInput('description')}
                                        placeholder='Tell everyone what your Pin is about'/>
                                </div>
                                <div className='create-pin-website create-pin-des-web'>
                                    <input type="text"
                                        value={this.state.website}
                                        onChange={this.handleInput('website')}
                                        placeholder='Add a destinstion link' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => {
    return {
        createPin: (formData) => dispatch(createPin(formData)),
    };
};

export default connect(msp, mdp)(CreatePinForm);