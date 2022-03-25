

type ActionType = {
    type?: string;
    payload?: any;
};

type Board1 = {
    title: string | null,
    description: string | null,
    status: string | null
};

type Board2 = {
    title: string | null,
    description: string | null,
    boardId: string | null,
    assignTo: string | null,
    status: string | null

};

type StateType = {
    currentBoard: Board1
    boards: Board2[] | null
};

const initState: StateType = {
    currentBoard: {
        title: null,
        description: null,
        status: null
    },
    boards : null
};

const statusReducer = (
    state: StateType = initState,
    action: ActionType
): StateType => {
    switch (action.type) {
        case "SET_ALL_BOARDS": {
            return {
                ...state,
                boards : action?.payload
            };
        }
        case "SET_CURRENT_BOARD": {
            return {
                ...state,
                currentBoard : action?.payload
            };
        }
    }
    return state;
};

export default statusReducer;
