import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { fetchPin } from '../../action/pin_actions';
import { fetchBoards } from '../../action/board_actions';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchPin(this.props.match.params.pinId);
    }

    handleBack(e) {

        this.props.history.goBack();
    }

    render() {

        const {pin, boards} = this.props;
        return (
            <div className='pin-show-page' >
                <div className='pin-show-back' onClick={this.handleBack}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className='pin-show-main'>
                    <div className='pin-show-nav'>
                        <div className='pin-show-icons'> 
                            <div className='pin-show-icon'>
                                <i className="fas fa-pen"></i>
                            </div>
                            <div className='pin-show-icon'>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>  
                        </div>
                        <div className='pin-show-nav-right'>
                            <div className='pin-show-nav-choose-board'>
                                { boards ? boards[0].title : null}
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className='pin-show-nav-save'>
                                Save
                            </div>
                        </div>
                    </div>
                    { pin ? 
                        <div>
                            <div className='pin-show-content'>
                                <div className='pin-show-title'>
                                    {pin.title}
                                </div>
                                <a href={pin.website} className='pin-show-img-container'>
                                    <div className='pin-show-img'>
                                        {pin ? <img src={pin.photoUrl} alt={pin.website}/> : null}
                                    </div>
                                </a>
                                { 
                                    pin.website
                                    ? 
                                        <a href={pin.website} className='pin-show-website'>
                                            <i className="fas fa-link"></i>
                                            {pin.website}
                                        </a>
                                    : null
                                }
                            </div>
                            <div className='pin-show-description'>
                                <a>{pin.description}</a>
                            </div>
                        </div>
                    : null }
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return { 
        pin: state.entities.pins[ownProps.match.params.pinId],
        boards: Object.values[state.entities.boards],
    }
};

const mdp = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoards: () => dispatch(fetchBoards()),
});

export default withRouter(connect(msp, mdp)(PinShow));