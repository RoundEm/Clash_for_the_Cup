import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div id="login" className="form-container auth-form">
                <h2>Login</h2>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required />
                        </div>
                        <p><Link to="/">Forgot Password?</Link></p>
                    </fieldset>
                </form>
                <button id="login-button">Login</button>
            </div>
        );
    }
}

export default Login;