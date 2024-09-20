import React, { useState } from "react";
import ChatIcon from "../../assets/logo.png";
import ChatWindow from "./ChatWindow";
function ChatComponent() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleIconClick = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      <img
        src={ChatIcon}
        alt="Chat"
        onClick={handleIconClick}
        className="w-28"
      />
      {isChatVisible && (
        <div className="chat-window">
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default ChatComponent;
