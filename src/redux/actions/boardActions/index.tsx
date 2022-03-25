import * as types from "../../types";


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

export const setCurrentBoard = (card:Board1) => {
  return {
    type: types.SET_CURRENT_BOARD,
    payload: card,
  };
};

export const setAllBoards = (cards:Board2[]) => {
    return {
      type: types.SET_ALL_BOARDS,
      payload: cards,
    };
  };