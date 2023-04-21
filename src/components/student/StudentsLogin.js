import React from 'react';
import "./css/StudentLogin.css";
import Logo from './loginImage/mjpru-logo.png';

function StudentsLogin() {
    return (
        <>
            <div className="login-frame">
                <div className='login-container'>
                    <div className='login-left'>
                        <a href="/" className='title'>
                            <h1><img src={Logo} alt="logo" /> MJPZONE</h1>
                        </a>
                    </div>
                    <div className='login-right'>
                        <h1>Login <span>(Student/Parent)</span></h1>
                        <a href="/">Click here for faculty login</a>
                        <form action="submit">
                            <div>
                                <label htmlFor="username">ENROLLMENT/ROLL NO:</label>
                                <input type="text" name="username" id="username" placeholder="ENROLLMENT / ROLL NO" />
                            </div>
                            <div>
                                <label htmlFor="dob">DATE OF BIRTH:</label>
                                <input type="date" name="dob" id="dob" placeholder='dd-mm-yyyy' />
                            </div>
                            <div>
                                <button type="submit" className="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentsLogin;