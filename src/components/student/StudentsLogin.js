import React from 'react';
import "./css/StudentLogin.css";
import Logo from 'D:/MCA Major Project/mjpzone/src/images/loginImage/mjp-logo.png';

function StudentsLogin() {
    return (
        <>
            <div className='login-container'>
                <div className='login-left'>
                    <h1>MJPZONE</h1>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='login-right'>
                    <h1>Login <span>Student/Parent</span></h1>
                    <a href="/">Click here for faculty login</a>
                    <form action="submit">
                        <div>
                            <label htmlFor="username">ENROLLMENT/ROLL NO:</label>
                            <input type="text" name="username" id="username" placeholder="ENROLLMENT / ROLL NO" />
                        </div>
                        <div>
                            <label htmlFor="dob">DATE OF BIRTH:</label>
                            <input type="datetime" name="dob" id="dob" placeholder='DD-MM-YYYY' />
                        </div>
                        <div>
                            <button type="submit" class="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default StudentsLogin;