import React from "react";
import {UserChat} from "./textChat";

let gridElement = (
    <div className = "body">
        <div id="gameBoard">
            <div className = "grid-container">
                <img src="./tiles/tile_01.png" className = "grid-item ground" alt = "ground" />
            </div>
        </div>
        <UserChat />
    </div>
)

export function GameBoard() {
    return gridElement;
}