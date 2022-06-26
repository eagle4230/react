import { AUTHOR } from 'src/data';

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  newChat,
});

export const deleteChat = (chatName) => ({
  type: DELETE_CHAT,
  chatName,
});

export const addMessage = (chatName, message) => ({
  type: ADD_MESSAGE,
  chatName,
  message,
});

let timeout;

export const addMessageWithReply = (chatName, message) => (dispatch) => {
  dispatch(
    addMessage(chatName, {
      author: AUTHOR.user,
      text: message.text,
    })
  );

  if (message.author !== AUTHOR.bot) {

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => dispatch(
      addMessage(chatName, {
        author: AUTHOR.bot,
        text: 'Hello Artem!',
      })
    ), 1000);
  }
};
