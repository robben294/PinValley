import React from 'react';
import GreetingContainer from './greeting/greeting';
import Modal from './modal/modal';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Route path='/' component={GreetingContainer} />
        <Modal />
    </div>
);

export default App;