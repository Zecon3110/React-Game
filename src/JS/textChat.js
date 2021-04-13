import React from "react";

let chat = (
    <div id="chatBox">
        <textarea className="chat-box"></textarea>
        <div className="userInput">
            <input type="text" className="text-chat"/>
            <input type="submit" className="btn" />
            <input type="submit" value="Logout" className="btn" />
        </div>
    </div>
)

export function UserChat() {
    return chat;
}