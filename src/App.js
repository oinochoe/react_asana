import React from 'react';
import { Route } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import TodoWritePage from './pages/TodoWritePage';

const App = () => {
    return (
        <>
            <Route component={TodoListPage} path={['/@:username', '/']} />
            <Route component={TodoWritePage} path="/write" />
        </>
    );
};

export default App;
