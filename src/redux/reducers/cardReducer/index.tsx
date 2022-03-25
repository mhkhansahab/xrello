

type ActionType = {
    type?: string;
    payload?: any;
};

type Card1 = {
    title?: string | null,
    description?: string | null,
    status?: string | null,
    email?: string | null,
    id?: string | null
};

type Card2 = {
    title: string | null,
    description: string | null,
    boardId: string | null,
    assignTo: string | null,
    status: string | null

};

type StateType = {
    currentCard: Card1
    cards: Card2[] | null
};

const initState: StateType = {
    currentCard: {
        title: null,
        description: null,
        status: null,
        email:null,
        id:null
    },
    cards : null
};

const statusReducer = (
    state: StateType = initState,
    action: ActionType
): StateType => {
    switch (action.type) {
        case "SET_ALL_CARDS": {
            return {
                ...state,
                cards : action?.payload
            };
        }
        case "SET_CURRENT_CARD": {
            return {
                ...state,
                currentCard : action?.payload
            };
        }
    }
    return state;
};

export default statusReducer;
