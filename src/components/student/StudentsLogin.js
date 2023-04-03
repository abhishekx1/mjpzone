import React from 'react';
import "./css/StudentLogin.css";

function StudentsLogin() {
    return (
        <>
            <div className='login-container'>
                <div>
                    <img src="" alt="logo" />
                </div>
                <h1>Login <span>Student/Parent</span></h1>
                <a href="/">Click here for faculty login</a>
                <form action="submit">
                    <div>
                        <input type="text" name="username" id="username" placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div>
                        <input type="button" value="Login" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default StudentsLogin;