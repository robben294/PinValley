// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { closeModal } from '../../action/modal_actions';
// import { updatePinBoard, deletePinBoard } from '../../action/pin_board_actions';
// import { createPinNotFomatted } from '../../action/pin_actions';

// class EditPinForm extends React.Component {
//     constructor(props) {
//         super(props);
//         const { pin, pinBoard, board } = this.props;
//         this.state = {
//             title: pin.title || "",
//             website: pin.website,
//             description: pinBoard.description,
//         };
//         this.handleClose = this.handleClose.bind(this);
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//         // this.props.fetchBoards();
//     }

//     handleInput(field) {
//         return (e) => {
//             this.setState({
//                 [field]: e.target.value,
//             });
//         };
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const { pinBoard } = this.props;
//         const { title, description, website } = this.state;

//         const new_pin_board = {
//             description,
//             id: pinBoard.id,
//             pin_id: pinBoard.pin_id,
//             board_id: pinBoard.board_id,
//         };

//         const new_pin = {
//             pin: {
//                 id: pinBoard.pin_id,
//                 title,
//                 website,
//             },
//             pin_board: {
//                 description,
//                 board_id: pinBoard.board_id,
//             }
//         };
//         if (this.needCreatePin()) {
//             this.props.createPin(new_pin)
//                 .then(() => this.props.deletePinBoard(pinBoard.id))
//                 .then(this.handleClose);
//             return;
//         }

//         if (this.needUpdatePinBoard()) {
//             this.props.updatePinBoard(new_pin_board)
//                 .then(this.handleClose);
//             return;
//         }

//     }

//     handleClose(e) {
//         this.props.closeModal();
//     }

//     handleDelete(e) {
//         this.props.deletePinBoard(this.props.pinBoard.id)
//             .then(() => this.props.history.push(`/boards/${this.props.board.id}`)).then(() => this.handleClose());
//     }

//     checkAuthor() {
//         return this.props.currentUserId === this.props.pin.author_id;
//     }

//     render() {
//         return (
//             <div className="edit-pin-form">
//                 <div className='edit-pin-title'>
//                     <div className='edit-pin-title-text'>Edit this Pin</div>
//                     <div className='edit-pin-close' onClick={this.handleClose}>
//                         <i className="fas fa-times"></i>
//                     </div>
//                 </div>

//                 <div className='edit-pin-content'>
//                     <div className='edit-pin-content-text'>
//                         <div className='edit-pin-select-board'>

//                         </div>
//                         {
//                             this.checkAuthor()
//                                 ? <div className='edit-pin-name'>
//                                     <div className='edit-pin-text'>
//                                         Title
//                                     </div>
//                                     <input className='edit-pin-name-box'
//                                         type="text"
//                                         value={this.state.title || ""}
//                                         onChange={this.handleInput('title')} />
//                                 </div>
//                                 : null
//                         }

//                         <div className='edit-pin-description'>
//                             <div className='edit-pin-text'>
//                                 Description
//                             </div>
//                             <textarea className='edit-pin-description-box'
//                                 type="text"
//                                 value={this.state.description || ""}
//                                 onChange={this.handleInput('description')}
//                                 placeholder="Tell us about this Pin..." />
//                         </div>

//                         {
//                             this.checkAuthor()
//                                 ? <div className='edit-pin-website'>
//                                     <div className='edit-pin-text'>
//                                         Website
//                                 </div>
//                                     <input className='edit-pin-website-box'
//                                         type="text"
//                                         value={this.state.website || ""}
//                                         onChange={this.handleInput('website')} />
//                                 </div>
//                                 : null
//                         }

//                     </div>

//                     <div className='edit-pin-img'>
//                         <img src={this.props.pin.photoUrl} />
//                     </div>

//                 </div>

//                 <div className='edit-pin-buttons'>
//                     <div className='edit-pin-buttons-left'>
//                         <div className='edit-pin-button edit-pin-delete-button'
//                             onClick={this.handleDelete}>
//                             Delete
//                         </div>
//                     </div>

//                     <div className='edit-pin-buttons-right'>
//                         <div className='edit-pin-button edit-pin-cancel-button'
//                             onClick={this.handleClose}>
//                             Cancel
//                         </div>
//                         <div
//                             className='edit-pin-button edit-pin-save-button'
//                             onClick={this.handleSubmit}>
//                             Save
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const msp = (state, ownProps) => {
//     return {
//         currentUserId: state.session.id,
//     };
// };

// const mdp = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal()),
//         deletePinBoard: (pinBoardId) => dispatch(deletePinBoard(pinBoardId)),
//         updatePinBoard: (pinBoard) => dispatch(updatePinBoard(pinBoard)),
//         createPin: (pin) => dispatch(createPinNotFomatted(pin)),
//     };
// };

// export default withRouter(connect(msp, mdp)(EditPinForm));