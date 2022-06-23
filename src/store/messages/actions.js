import { AUTHOR } from "../../data";

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

export const addMessageWithReply = (chatName, message) => (dispatch) => {
  dispatch(addMessage(chatName, message));

  if (message.author !== AUTHOR.bot) {
    dispatch(addMessage(chatName, {
      author: AUTHOR.bot,
      text: 'Hello Artem!',
    }));
  }
}

// useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     messages[chatId][messages[chatId].length - 1].author === AUTHOR.user
  //   ) {
  //     const timeout = setTimeout(() => {
  //       onAddMessage(chatId, {
  //         author: AUTHOR.bot,
  //         text: 'Hello Artem!',
  //       });
  //     }, 1500);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [chatId, messages]);