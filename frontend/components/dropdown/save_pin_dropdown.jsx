// import React from 'react';

// class Dropdown extends React.Component {


//     handleCreate() {
//         this.props.closeDropdown();
//         this.props.openModal({ modalType: 'createBoard' });
//     }

//     render() {
//         const { showDropdown, push, openModal } = this.props;
//         return (
//             <div>
//                 {
//                     showDropdown
//                         ? (
//                             <div className="profile-dropdown-content">
//                                 <div className="profile-arrow"> </div>
//                                 <div className="profile-arrow-up"></div>
//                                 <div className="profile-arrow-up-border"></div>
//                                 <div className="profile-dropdown-item"
//                                     onClick={this.handleCreate.bind(this)}>
//                                     <div>Create board</div>
//                                 </div>
//                                 <div
//                                     className="profile-dropdown-item"
//                                     onClick={() => push('/pin/new')}>
//                                     <div>Create Pin</div>
//                                 </div>
//                             </div>
//                         )
//                         : (
//                             null
//                         )
//                 }
//             </div>
//         )
//     }
// }

// export default Dropdown;