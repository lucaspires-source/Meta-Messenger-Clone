"use client";

import { FormEvent, useState } from "react";

function ChatInput() {
  const [input, setInput] = useState("");

  function addMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input

    setInput('')
  }
  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50  w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Enter Message here..."
        className="flex-1 rounded border  border-gray-300 focus:outiline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        disabled={!input}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
