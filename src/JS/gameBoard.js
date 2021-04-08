import React from "react";
import {UserChat} from "./textChat";
import Ground from "../IMG/tiles/tile_01.png";

let gridElement = (
    <div className = "body">
        <div id="gameBoard">
            <div className = "grid-container">
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
                <img src={Ground} className = "grid-item ground" alt = "ground" />
            </div>
        </div>
        <UserChat />
    </div>
)

export function GameBoard() {
    return gridElement;
}