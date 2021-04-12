import React, {useState} from "react";
import {GameBoard} from "./gameBoard";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [token, sessionToken] = useState();

    let login = {
        username,
        password
    }

    fetch("http://jats.web.eadania.dk/authentication/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(login)
    })
    .then(response => response.json())
    .then(json => {
        if(!json.success) {
            /*Handle Failed Login*/
            throw new Error("Login Failed: " + json.status);
            /*TODO*/
        }
        else {
            sessionToken(json.data);
        }
    })
    .catch(error => console.log(error));

    function onUsernameChange(event) {
        setUsername(event.target.value);
    }

    function onPasswordChange(event) {
        setPassword(event.target.value);
    }

    let userLogin = (
        <div className="body">
            <div id="login">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={onUsernameChange} value={username} required placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={onPasswordChange} value={password} required placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn btn-login" />
            </div>
        </div>
    )

    if(!token) 
    {
        return userLogin; 
    }
    else {
        return <GameBoard />;
    }
}