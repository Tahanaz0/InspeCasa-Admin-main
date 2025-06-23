import React from 'react'
import "./LoginSec.css"
import { Link } from 'react-router';

const LoginSec = () => {
  return (
    <div>
      <>
        <div className='container'>
          <div className='inner-container'>
            <div className='welcome'>
              <img src="/images/Login.svg" alt="" />
            </div>
            <div className='login'>
              <div className='para'>
                <h1>Welcome Back to Home Inspection</h1>
                <p>Enter your login details to continue your filmmaking journey.</p>
              </div>

              <div className='input-section'>
                <div className='input-1'>
                  <p>Full Name</p>
                  <input className='inputs' type="text" />
                </div>

                <div className='input-2'>
                  <p>Password</p>
                  <input className='inputs' type="password" />
                  <div className='checkbox'>
                    <input type="checkbox" /><span>Remember me</span>
                  </div>
                </div>
                <div className='login-btn'>
                    <Link to="/user"><button>Login</button></Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default LoginSec;
