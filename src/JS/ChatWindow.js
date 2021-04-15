import React, { useEffect, useState } from "react";

export function ChatBox(props) {
    const [userMessage, setUserMessage] = useState([]);

    useEffect(() => {
        function recieveMessage(message) {
            var messageArray = [...userMessage];
            if(userMessage.length === 6) {
                messageArray.shift();
            }

            messageArray.push(message);
            setUserMessage(messageArray);
        }

        props.chat.onEvent("ChatMessage", message => recieveMessage(message));

    }, [props.chat, userMessage]);

    return (
        <div className="chat-box">
            <div className="chat-inner">
                {userMessage.map(messageElement => {
                    return <p className="message">{messageElement}</p>
                })}
            </div>
        </div>
    )
}