// import { AUTHOR } from "../../data";
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './actions';
import { AUTHOR } from 'src/constants';
import { nanoid } from 'nanoid';

const initialMessages = {
  default: [
    {
      id: '1',
      author: AUTHOR.bot,
      text: 'Hello !!!',
    },
  ],
};

export const messageReducer = (state = initialMessages, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.newChat]: [],
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatName];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatName]: [
          ...state[action.chatName],
          {
            id: nanoid(),
            author: AUTHOR.user,
            text: action.text,
          },
        ],
      };
    }
    default:
      return state;
  }
};
