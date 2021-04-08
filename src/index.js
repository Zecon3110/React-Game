import React from "react";
import ReactDOM from "react-dom";
import "./CSS/StyleSheet.css";
import "./CSS/game.css"
import { Login } from "./JS/login";
import {GameBoard} from "./JS/gameBoard";
/*import "./folder/file.css"*/

ReactDOM.render(
    <GameBoard />,
    document.getElementById("root")
);