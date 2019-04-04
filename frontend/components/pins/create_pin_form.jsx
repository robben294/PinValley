import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createPin } from '../../action/pin_actions';
import { fetchBoards } from '../../action/board_actions';
import { createBoard } from '../../action/board_actions';
import Navbar from '../nav_bar/nav_bar';

class CreatePinForm extends React.Component {

    constructor(props) {
        debugger
        super(props);
        this.state = {
            title: '',
            board_title: '',
            description: '',
            website: '',
            photoFile: null,
            photoUrl: null,
            boardId: null,
            renderBoards: false,
            createBoard: false,
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemovePhoto = this.handleRemovePhoto.bind(this);
        this.redirectToProfile = this.redirectToProfile.bind(this);
        this.renderBoards = this.renderBoards.bind(this);
        this.hideBoards = this.hideBoards.bind(this);
        this.handleCreateBoard = this.handleCreateBoard.bind(this);
        this.openCreateBoard = this.openCreateBoard.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
        if (this.props.location.state) {
            this.setState({ boardId: this.props.location.state.board.id });
        }
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

    redirectToProfile(e) {
        this.props.history.push('/profile');
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
        formData.append('pin[title]', this.state.title);
        formData.append('pin[website]', this.state.website);
        formData.append('pin_board[board_id]', this.state.boardId);
        this.props.createPin(formData).then(() => this.props.history.push(`/boards/${this.state.boardId}`));
    }

    handleCreateBoard(e) {
        this.props.createBoard({title: this.state.board_title})
            .then((response) => {
                this.setState({ boardId: response.board.id });
            })
            .then((response) => {
                this.setState({ createBoard: false });
            });
    }

    openCreateBoard(e) {
        this.setState({createBoard: true});
        this.setState({renderBoards: false});
    }

    renderBoards(e) {
        this.setState({renderBoards: true});
    }

    hideBoards(e) {
        this.setState({renderBoards: false});
        this.setState({boardId: e._targetInst._currentElement.key});
    }

    handleClose(e) {
        this.setState({ renderBoards: true });
        this.setState({ createBoard: false });
    }

    render() {
        const {currentUser, boards} = this.props;

        const wrappedBoards = Object.values(boards).map(board => {
            return (
                <div className='create-pin-board-title' onClick={this.hideBoards} key={board.id}>
                    <span className='create-pin-board-title-text'>
                        {board.title}
                    </span>
                    <div className='create-pin-board-title-select'>
                        Select
                    </div>
                </div>
            )
        });

        const preview = this.state.photoUrl ? <div className='create-pin-image-wrap'>
            <i className="fas fa-trash" onClick={this.handleRemovePhoto} ></i>
            <img className='create-pin-preview' src={this.state.photoUrl}/>
        </div> : null;


        let pinForm;
        if (this.state.renderBoards) {
            pinForm = (
                <div>
                    <div className='create-pin-board-titles'>
                        <div className='create-pin-dropdown-head'>
                            All boards
                        </div>
                        {wrappedBoards}
                    </div>
                    <div className='create-new-board-button' onClick={this.openCreateBoard}>
                        <div>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <div className='create-new-board-button-text'>
                            Create Board
                        </div>
                    </div>
                </div>
                
            )
        } else if (this.state.createBoard) {
            pinForm = (
                <div className="create-board-form-pin">
                    <div className='create-board-title-pin'>
                        <div className='create-board-title-text-pin'>Create board</div>
                    </div>
                    <div className='create-board-content-pin'>
                        <div className='create-board-name-pin'>
                            <div className='create-board-text-pin'>
                                Name
                            </div>
                            <input className='create-board-name-box-pin'
                                type="text"
                                value={this.state.board_title}
                                onChange={this.handleInput('board_title')}
                                placeholder='Like "Places to Go" or "Recipes to Make"' />
                        </div>

                        <div className='create-board-buttons-pin'>
                            <div className='create-board-button-pin create-board-cancel-button-pin' onClick={this.handleClose}>
                                Cancel
                        </div>
                            <div
                                className={`${this.state.board_title !== "" ? 'active' : 'inactive'} create-board-button-pin`}
                                onClick={this.state.board_title !== "" ? this.handleCreateBoard : null}>
                                Create
                        </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            pinForm = (
                <div className='create-pin-text'>
                    <div className='create-pin-title'>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                            placeholder='Add your title' />
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
                            placeholder='Tell everyone what your Pin is about' />
                    </div>
                    <div className='create-pin-website create-pin-des-web'>
                        <input type="text"
                            value={this.state.website}
                            onChange={this.handleInput('website')}
                            placeholder='Add a destinstion link' />
                    </div>
                    <div className='create-pin-dropdown' onClick={this.renderBoards}>
                        <div>
                            {boards[this.state.boardId] ? boards[this.state.boardId].title : "Choose a board (required)"}
                        </div>
                        <div>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div> 
            )
        }

        return (
            <div>
                <Navbar />
                <div className='create-pin'>
                    <div className='create-pin-back' onClick={this.redirectToProfile}>
                        <i className="fas fa-chevron-left"></i>
                        <div className='create-pin-back-text'>Home</div>
                    </div>
                    <div className='create-pin-main'>
                        <div className='create-pin-save-container'>
                            {(this.state.createBoard || this.state.renderBoards) 
                            ? null
                            : (
                                <div className='create-pin-save' onClick={this.handleSubmit}>
                                    <div className='create-pin-pin'>
                                        <i className="fas fa-thumbtack"></i>
                                    </div>
                                    <div className='create-pin-save-text'>
                                        Save
                                    </div>
                                </div>
                            )}        
                        </div>
                        <div className='create-pin-form'>
                            <div className='create-pin-upload-wrap'>
                                <div className='create-pin-photo'>
                                    {preview ? preview : <input type="file"
                                        onChange={this.handleFile}
                                        className='create-pin-file-input' />}
                                </div>
                            </div>
                            {pinForm}
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
        boards: state.entities.boards,
    };
};

const mdp = dispatch => {
    return {
        createPin: (formData) => dispatch(createPin(formData)),
        fetchBoards: () => dispatch(fetchBoards()),
        createBoard: (board) => dispatch(createBoard(board)),
    };
};

export default withRouter(connect(msp, mdp)(CreatePinForm));