import React from "react";
import {ChatBox} from "./ChatWindow";
import {ChatComposer} from "./ChatInput";
import useGameServer from "./useGameServer";

export function GameBoard(props) {

    function onClosedConnection() {
        props.onDisconnect();
    }

    const server = useGameServer("http://jats.web.eadania.dk/gamehub", props.authSessionToken, onClosedConnection);

    server.connect();

    return (
        <div className = "body">
            <div id="gameBoard">
                <div className = "grid-container">
                    <img src="./tiles/tile_01.png" className="grid-item ground" alt="ground" />
                </div>
            </div>
            <div id="chatBox">
                <ChatBox chat={server} />
                <ChatComposer server={server} closedConnection={onClosedConnection}/>
            </div>
        </div>
    );
}