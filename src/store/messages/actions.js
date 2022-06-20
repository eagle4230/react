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

export const addMessage = (chatName, text) => ({
  type: ADD_MESSAGE,
  chatName,
  text,
});
