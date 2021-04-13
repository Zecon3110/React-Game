import React from "react";
import { Login } from "./LoginComponent";
import useGameServer from "./useGameServer";

export function GameBoard(props) {

    function onClosedConnection() {}

    const server = useGameServer("http://jats.web.eadania.dk/gamehub", props.authSessionToken, onClosedConnection);

    server.connect();

    function onLogOut() {
        server.disconnect();
        console.log(props.authSessionToken);
        if(!props.authSessionToken) {
            return <Login />
        }
    }

    return (
        <div className = "body">
            <div id="gameBoard">
                <div className = "grid-container">
                    <img src="./tiles/tile_01.png" className="grid-item ground" alt="ground" />
                </div>
            </div>
            <div id="chatBox">
                <textarea className="chat-box"></textarea>
                <div className="userInput">
                    <input type="text" className="text-chat"/>
                    <input type="submit" className="btn" />
                    <input type="submit" onClick={onLogOut} value="Log Out" className="btn" />
                </div>
            </div>
        </div>
    );
}