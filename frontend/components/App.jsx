import React from 'react';
import GreetingContainer from './greeting/greeting';
import Modal from './modal/modal';

const App = () => (
    <div>
        <img src={window.background} className='login-background' />
        <GreetingContainer />
        <Modal />
    </div>
);

export default App;