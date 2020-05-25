import React from 'react';
import { Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoWrite from './pages/TodoWrite';

const App = () => {
    return (
        <>
            <Route component={TodoList} path={['/@:username', '/']} />
            <Route component={TodoWrite} path="/write" />]
        </>
    );
};

export default App;
