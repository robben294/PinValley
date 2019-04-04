import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {

    render() {
        if (this.props.location.pathname === '/profile/edit') {
            return null;
        }

        const pins = this.props.pins.map(pin => {
            return (
                <PinIndexItem pin={pin} key={pin.id}/>
            )
        });
        return (
            <div>
                <div className='pins'>
                    {pins}
                </div>
            </div>
        );
    }
}

const msp = state => {
    return {
        pins: Object.values(state.entities.pins),
    };
};

const mdp = dispatch => {
    return {

    };
};

export default withRouter(connect(msp, mdp)(PinIndex));