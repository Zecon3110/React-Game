import React, { useState } from "react";

export function ChatComposer(props) {
    const [userMessage, setUserMessage] = useState("");

    function onMessage() {
        props.server.invoke("Chat", userMessage);
        setUserMessage("");
    }

    function chatMessageChange(event) {
        setUserMessage(event.target.value);
    }

    return (
        <div className="userInput">
            <input type="text" value={userMessage} onChange={chatMessageChange} className="text-chat" />
            <button onClick={onMessage} className="btn">Send</button>
            <button onClick={props.closedConnection} className="btn">Log Out</button>
        </div>
    )
}