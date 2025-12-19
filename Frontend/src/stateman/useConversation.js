import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  messages: [],

  setSelectedConversation: (conversation) =>
    set({
      selectedConversation: conversation,
      messages: [], // 🔥 conversation change par purane messages clear
    }),

  setMessages: (messages) =>
    set({
      messages: Array.isArray(messages) ? messages : [], // 🔒 safety
    }),

  addMessage: (newMessage) =>
    set((state) => ({
      messages: [...state.messages, newMessage],
    })),
}));

export default useConversation;
