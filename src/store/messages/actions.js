export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  newChat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

export const addMessage = (chatId, newMessage) => ({
  type: ADD_MESSAGE,
  chatId,
  newMessage,
});