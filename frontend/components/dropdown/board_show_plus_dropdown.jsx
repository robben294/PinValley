import React from 'react';
import { Redirect } from 'react-router-dom';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createPin: false,
        };
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(e) {
        this.setState({createPin: true});
    }

    render() {
        return (
            <div>
                {
                    this.props.showDropdown
                        ? ( 
                            <div className="board-show-dropdown-content">

                                { this.state.createPin 
                                ? <Redirect to={{
                                        pathname: '/pin/new',
                                        state: { board: this.props.board },
                                    }} />
                                : null }

                                <div className="board-show-arrow"> </div>
                                <div className="board-show-arrow-up"></div>
                                <div className="board-show-arrow-up-border"></div>
                                <div className="board-show-dropdown-item" onClick={this.handleRedirect}>
                                    <div>Create Pin</div>
                                </div>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        )
    }
}

export default Dropdown;