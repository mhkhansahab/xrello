import * as types from "../../types";

type StateType = {
    cardModal?: true | false,
    cardUpdate?: true | false,
    boardModal?: true | false,
    boardUpdate?: true | false,
    userModal?: true | false,
};

export const changeStatus = (statuses:StateType) => {
  return {
    type: types.CHANGE_STATUS,
    payload: statuses,
  };
};
