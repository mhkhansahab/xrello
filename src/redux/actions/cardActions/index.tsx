import * as types from "../../types";


type Card1 = {
  title: string | null,
  description: string | null,
  email: string | null,
  status: string | null,
  id: string | null
};

type Card2 = {
  title: string | null,
  description: string | null,
  boardId: string | null,
  assignTo: string | null,
  status: string | null

};

export const setCurrentCard = (card: Card1) => {
  return {
    type: types.SET_CURRENT_CARD,
    payload: card,
  };
};

export const setAllCards = (cards: Card2[]) => {
  return {
    type: types.SET_ALL_CARDS,
    payload: cards,
  };
};