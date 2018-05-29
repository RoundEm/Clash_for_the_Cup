import React from 'react';
import './AuthForms.css';

class Register extends React.Component {
    render() {
        return (
            <div id="register">
                <h2>Register</h2>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" required />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </div>
                        <div>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input type="date" id="date-of-birth" required />
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" required />
                        </div>
                    </fieldset>
                </form>
                <button id="register-button">Register</button>
            </div>
        )
    }
}

export default Register;