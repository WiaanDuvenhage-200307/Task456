import React, {useState} from 'react';
// import axios from 'axios';
import Logo from '../Assets/sun.png';

export default function Register() {

    const [inputs, setInputs] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const [nameError, setNameError] = useState();  //empty useState to not bomnbard user with errors
    const [lastError, setlastError] = useState();  //empty useState to not bomnbard user with errors
    const [emailError, setEmailError] = useState(); //empty useState to not bomnbard user with errors
    const [usernameError, setUsernameError] = useState(); //empty useState to not bomnbard user with errors
    const [contactError, setContactError] = useState(); //empty useState to not bomnbard user with errors
    const [passwordError, setPasswordError] = useState(); //empty useState to not bomnbard user with errors
    const [passwordConError, setPasswordConError] = useState();  //empty useState to not bomnbard user with errors
    // TODO Check into useReducer() React Hook!

    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();

    const fnameVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, fname: value});
        console.log(inputs)

        if(inputs.fname !== ""){
            setNameError();
        }
    }

    const lnameVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, lname: value});
        console.log(inputs)

        if(inputs.lname !== ""){
            setNameError();
        }
    }



  return (
    <div className='container'>
        <div className="formHeader"><h1>Artsy</h1> <img src={Logo} width={50}/></div>
        <form className='form-con'>
            <input type="text" name="fname" id="fname" placeholder='First Name' onChange={fnameVal}/>
            <input type="text" name="lname" id="lname" placeholder='Last Name' onChange={lnameVal}/>
            <input type="text" name="email" id="email" placeholder='Email'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <input type="password" name="conpass" id="conpass" placeholder='Confirm Password'/>
            <input type="number" name="number" id="number" placeholder='Phone Number'/>
            <button>Login</button>
        </form>
    </div>
  )
}
