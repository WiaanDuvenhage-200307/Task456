import React, {useState} from 'react';
// import axios from 'axios';
import Logo from '../Assets/sun.png';

export default function Login() {



  return (
    <div className='container'>
        <div className="formHeader"><h1>Artsy</h1> <img src={Logo} width={50}/></div>
        <form className='form-con' action="">
            <input type="text" name="email" id="email" placeholder='Email'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <button>Login</button>
        </form>
    </div>
  )
}
