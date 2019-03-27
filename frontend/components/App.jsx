import React from 'react';
import GreetingContainer from './greeting/greeting';
import Modal from './modal/modal';

const App = () => (
    <div>
        <h1>Welcome to PinValley</h1>
        <Modal />
        <GreetingContainer />
    </div>
);

export default App;