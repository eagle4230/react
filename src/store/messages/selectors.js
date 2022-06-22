import { nanoid } from 'nanoid';

export const selectChats = (state) =>
  Object.keys(state.messages).map((chat) => ({
    id: nanoid(),
    name: chat,
  }));

export const selectMessages = (state) => state.messages;
