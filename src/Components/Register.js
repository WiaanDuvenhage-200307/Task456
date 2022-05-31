import React, {useState} from 'react';
import axios from 'axios';
import Logo from '../Assets/sun.png';
import MiniModalLeft from './MiniModalLeft';
import MiniModalRight from './MiniModalRight';
import ErrorIcon from '../Assets/error.svg';
import ValidIcon from '../Assets/valid.svg';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    // const navigate = useNavigate();

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

    const [emailIcon, setEmailIcon] = useState();

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

    const emailVal = (e) => {
        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const value = e.target.value;
        setInputs({...inputs, email: value});

        if(inputs.email !== ""){
            setEmailError();
        }

        if(!value.match(mailRegex)){
            setEmailError(<MiniModalLeft message="Email is not a valid format..."/>);
        }
    }

    const authEmail = () => {
        axios.post('http://localhost/api_five/authenticateEmail.php', inputs)
        .then(function(res){
            console.log(res);
            if(res.data === "Available"){
                setEmailIcon(ValidIcon);
                setEmailAvail();
            }else if(res.data === "Not Available"){
                setEmailIcon(ErrorIcon);
                setEmailAvail(<MiniModalRight message="Email is not available"/>);
            } else if(res.data === ""){ //if field is empty
                setEmailIcon(); 
                setEmailAvail();
                setEmailError();
            }
        })
    }

    const contactVal = (e) => {
        const contRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

        const value = e.target.value;
        setInputs({...inputs, phoneNumber: value});

        if(inputs.phoneNumber !== ""){
            setContactError();
        }

        if(!value.match(contRegex)){
            setContactError(<MiniModalRight message="Invalid Phone Number..."/>);
        }

        console.log(inputs);
    }

    const passwordVal = (e) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/;

        const value = e.target.value;
        setInputs({...inputs, password: value});

        if(inputs.password !== ""){
            setPasswordError();
        }

        if(!value.match(passRegex)){
            setPasswordError(<MiniModalLeft message="Password must include X, Y & Z..."/>);
        }

    }

    const passwordConVal = (e) => {

        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});
        
        if(inputs.password === value){
            setPasswordConError();
        } else {
            setPasswordConError(<MiniModalLeft  message="Password does not match"/>);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        if(inputs.first === ''){
            setNameError(<MiniModalLeft message="What's Your Name"/>)
        } else{
            setNameError();
        }

        if(inputs.last === ''){
            setlastError(<MiniModalRight message="What's Your Last Name"/>)
        } else{
            setlastError();
        }

        if(inputs.email === ''){
            setEmailError(<MiniModalLeft message="You must provide an Email"/>);
        } else{
            setEmailError();
        }

        if(inputs.username === ''){
            setUsernameError(<MiniModalLeft message="You must provide an Usernane"/>);
        } else{
            setUsernameError();
        }

        if(inputs.contact === ''){
            setContactError(<MiniModalRight message="provide a number"/>);
        } else{
            setContactError();
        }

        if(inputs.password === ''){
            setPasswordError(<MiniModalLeft message="provide a password"/>);
        } else{
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<MiniModalLeft message="confirm your password"/>);
        } else{
            setPasswordConError();
        }

        let result = Object.values(inputs).some(o => o === '');

        if(result){
            console.log("There is an error");
        } else {
            axios.post('http://localhost/api456/addUser.php', inputs)
            .then(function(res){
                console.log(res);

                if(res.status === 200){
                    // navigate('/login');
                }
            })
        }
    }
    





  return (
    <div className='container'>
        <div className="formHeader"><h1>Artsy</h1> <img src={Logo} width={75}/></div>
        <form className='form-con'>

            {nameError}
            <input type="text" name="fname" id="fname" placeholder='First Name' onChange={fnameVal}/>

            {lastError}
            <input type="text" name="lname" id="lname" placeholder='Last Name' onChange={lnameVal}/>
            
            {emailError}
            {emailAvail}

            <div className="statusIcon">
                <img src={emailIcon}></img>
            </div>  

            <input type="text" name="email" id="email" placeholder='Email' onBlur={authEmail} onChange={emailVal}/>


            <input type="password" name="password" id="password" placeholder='Password' onChange={passwordVal}/>

            <input type="password" name="conpass" id="conpass" placeholder='Confirm Password' onChange={passwordConVal}/>

            {contactError}
            <input type="number" name="number" id="number" placeholder='Phone Number' onChange={contactVal}/>

            <button onClick={handleSubmit}>Register</button>

        </form>
    </div>
  )
}
