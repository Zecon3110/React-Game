import React from "react";

let element = (
    <div className="body">
        <div id="login">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn btn-login" />
            </div>
        <div/>
    </div>
)

export function Element() {
    return element;
}