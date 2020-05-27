export const FILTERS = {
    '/': {
        text: '전체',
        select: (tasks) => (id) => tasks[id],
    },
    '/complete': {
        text: '완료',
        select: (tasks) => (id) => tasks[id].complete,
    },
    '/incomplete': {
        text: '미완료',
        select: (tasks) => (id) => !tasks[id].complete,
    },
};

export const STORAGE_KEY = 'stored-task-state';

export const TITLE = '아사나 보다 더??';
