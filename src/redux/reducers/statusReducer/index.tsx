

type ActionType = {
    type?: string;
    payload?: any;
};

type StateType = {
    cardModal: true | false,
    cardUpdate: true | false,
    boardModal: true | false,
    boardUpdate: true | false,
};

const initState: StateType = {
    cardModal: false,
    cardUpdate: false,
    boardModal: false,
    boardUpdate:  false
};

const statusReducer = (
    state: StateType = initState,
    action: ActionType
): StateType => {
    switch (action.type) {
        case "CHANGE_STATUS": {
            return {
                ...state,
                ...action.payload
            };
        }
    }
    return state;
};

export default statusReducer;
