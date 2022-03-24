
import * as types from "../../types";

type StateType = {
    username: string | null,
    email: string | null,
    token: string | null,
    id: string | null,
};

export const addUser = (user: StateType) => {
    return {
        type: types.ADD_USER,
        payload: user,
    };
};
