import React from 'react';
import { removeAllTasks, setModal } from '../state/actions';
import { Button } from '../styles/Buttons';
import * as Type from '../styles/Typography';

const DeleteTasksModal = () => (
    <div>
        <Type.P>전체 삭제하시겠습니까?</Type.P>
        <div style={{ textAlign: 'right' }}>
            <Button
                margin="0 1rem 0 0"
                onClick={() => setModal({ active: false })}
            >
                취소
            </Button>
            <Button
                mode="caution"
                onClick={() => {
                    removeAllTasks();
                    setModal({ active: false });
                }}
            >
                삭제
            </Button>
        </div>
    </div>
);

export const modalContent = {
    deleteTasks: <DeleteTasksModal />,
};
