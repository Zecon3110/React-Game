import React, { useState } from "react";
import { GameBoard } from "./GameBoardComponent";
import { Login } from "./LoginComponent";

export function GameComponent() {
    const [authToken, setAuthToken] = useState("");

    function onLogIn(token) {
        setAuthToken(token);
    }
    
    if(authToken) {
        return <GameBoard authSessionToken={authToken} /> 
    }
    else {
        return <Login authSessionToken={onLogIn} />
    }
}