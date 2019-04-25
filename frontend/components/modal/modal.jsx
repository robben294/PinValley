import React from 'react';
import { closeModal } from '../../action/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateBoardForm from '../boards/create_board_form';
import EditBoardForm from '../boards/edit_board_form';
import EditPinForm from '../pins/edit_pin_form';
import SavePinForm from '../pins/save_pin_form';
import PinShow from '../pins/pin_show';

const Modal = ({ modal, closeModal }) => {

    if (!modal) {
        return null;
    }
    let components = [];
    let background = null;
    let backgroundClass;
    let backgroundClasses = [];

    for (let i = 0; i < modal.length; i++) {
        switch (modal[i].modalType) {
            case 'login':
                components.push(<LoginFormContainer />);
                background = <img src={window.background} className='login-background' />;
                backgroundClass = "modal-background";
                break;
            case 'signup':
                components.push(<SignupFormContainer />);
                background = <img src={window.background} className='login-background' />;
                backgroundClass = "modal-background";
                break;
            case 'createBoard':
                components.push(<CreateBoardForm />);
                backgroundClass = "boards-modal-background";
                break;
            case 'editBoard':
                components.push(<EditBoardForm board={modal[i].modalProps} />);
                backgroundClass = "boards-modal-background";
                break;
            case 'editPin':
                components.push(<EditPinForm 
                                pin={modal[i].modalProps.pin} 
                                board={modal[i].modalProps.board} 
                                pinBoard={modal[i].modalProps.pinBoard}/>);
                backgroundClass = "boards-modal-background";
                break;
            case 'savePin':
                components.push(<SavePinForm 
                                pinBoard={modal[i].modalProps.pinBoard}
                                pin={modal[i].modalProps.pin}
                                boards={modal[i].modalProps.boards}/>);
                backgroundClass = "boards-modal-background";
                break;
            case 'showPin' :
                components.push(<PinShow 
                                pinBoard={modal[i].modalProps.pinBoard}/>);
                backgroundClass = "pin-show-modal-background";
                break;
            default:
                return null;
        }
        backgroundClasses.push(backgroundClass);
    }

    const handleClick = (e) => {
        if (backgroundClass === "modal-background") {
            return null;
        } else {
            closeModal();
        }
    };

    const wrappedComponents = components.map((component, idx) => {
        return (
            <div className={backgroundClasses[idx]} key={idx} onClick={handleClick}>
                <div onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    })


    return (
            <div>
                {background}
                <div 
                    className={backgroundClass} 
                    onClick={handleClick}>
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        {wrappedComponents}
                    </div>
                </div>
            </div>
        );
};

const msp = (state) => ({
    modal: state.ui.modal,
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Modal);