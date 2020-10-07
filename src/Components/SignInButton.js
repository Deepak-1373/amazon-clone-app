import React from 'react';
import "./SignInButton.css";
import { useHistory } from "react-router-dom";

function SignInButton() {
    const history = useHistory();
    return (
        <div className="signInButton">
            <h1>Please Sign-in to see your Orders</h1>
            <div className="signInButton__container">
                <button onClick={e => history.push('/login')}>Sign In</button>
            </div>
        </div>
    )
}

export default SignInButton;
