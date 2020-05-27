import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { Provider } from '../../state';
import { reorderTasks, setRoute } from '../../state/actions';
import { GlobalStyle } from '../../styles';

import { Modal } from './Modal';
import { Router } from './Router';
import { TaskListHeader } from './TaskListHeader';
import { TaskList } from './TaskList';

export const TodoList = () => (
    <Provider>
        <GlobalStyle />
        <Modal />
        <Router setRoute={setRoute}>
            <TaskListHeader />
            <DragDropContext onDragEnd={reorderTasks}>
                <TaskList />
            </DragDropContext>
        </Router>
    </Provider>
);
