import React, { useState } from "react";
import { GameBoard } from "./GameBoardComponent";
import { Login } from "./LoginComponent";

export function GameComponent() {
    const [authToken, setAuthToken] = useState("");

    function onLogIn(token) {
        setAuthToken(token);
    }

    function onDisconnect() {
        setAuthToken("");
    }
    
    if(authToken !== "") {
        return <GameBoard authSessionToken={authToken} onDisconnect={onDisconnect} /> 
    }
    else {
        return <Login authSessionToken={onLogIn} />
    }
}