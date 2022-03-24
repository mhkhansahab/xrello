import { PaletteMode } from "@mui/material";

type ActionType = {
    type?: string;
    payload?: any;
};

type StateType = {
    username: string | null,
    email: string | null,
    token: string | null,
    id: string | null,
};

const initState: StateType = {
    username: null,
    email: null,
    token: null,
    id: null,
};

const userReducer = (
    state: StateType = initState,
    action: ActionType
): StateType => {
    switch (action.type) {
        case "ADD_USER": {
            return {
                ...state,
                ...action.payload
            };
        }
    }
    return state;
};

export default userReducer;
