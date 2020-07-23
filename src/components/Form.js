import React, { useState } from 'react';

const Form = (props) => {

    // assigning empty values
    // const [values, setValues] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    // handle submit function:
    const handleSubmit = event => {   // a function to handle submi that contains a preventDefualt function and a callback function.
        event.preventDefault(); // prevents the browser from refreshing the page.
        submit();
    };
    function submit() {
        alert("Submitted Successfully")
    };

    // submit button is initially set to disabled on line 114. If all the conditions are true, 
    //then  false is returned making the button enabled. 
    // else return true that the button is disabled (until all inputs are valid). 
    const isDisabled = () => {
        if (firstName.length >= 2 &&
            lastName.length >= 2 &&
            email.length >= 2 &&
            password.length >= 8 &&
            confirmPassword.length >= 8 &&
            password == confirmPassword) {
            return (false);
        }
        else {
            return (true);
        }
    };

    // handle length of names. must have at least 2 characters. output error message.
    const handleFirstName = event => {
        if (firstName.length < 2) {
            return (<span>First name must be at least two characters</span>)
        }
        else {
            return (null)
        }
    };

    const handleLastName = event => {
        if (lastName.length < 2) {
            return (<span>Last name must be at least two characters</span>)
        }
        else {
            return (null);
        }
    };

    // handle length of email. mast have 5 characters
    const handleEmail = event => {
        if (email.length < 2) {
            return (<span>email must be at least two characters</span>)
        }
        else {
            return (null);
        }
    };

    // handle passwords. must be 8 characters AND MATCH. 
    const handlePassword = event => {
        if (password.length < 8 && confirmPassword.length < 8) {
            return (<span>password must be at least 8 characters</span>)
        }
        else if (password !== confirmPassword) {
            return (<span>passwords do not match. </span>)
        }
        else {
            return (null);
        }
    };


    return (
        <div id='container'>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>First Name: </label>
                    <input name='firstName' type='text' required onChange={(event) => setFirstName(event.target.value)}></input>
                    <div className='error_message'>{handleFirstName()}</div>
                </div>

                <div>
                    <label>Last Name: </label>
                    <input name='lastName' type='text' required onChange={(event) => setLastName(event.target.value)}></input>
                    <div className='error_message'>{handleLastName()}</div>
                </div>

                <div>
                    <label>Email: </label>
                    <input name='email' type='email' required onChange={(event) => setEmail(event.target.value)}></input>
                    <div className='error_message'>{handleEmail()}</div>
                </div>

                <div>
                    <label>Password: </label>
                    <input name='password' type='password' required onChange={(event) => setPassword(event.target.value)}></input>
                    <div className='error_message'>{handlePassword()}</div>
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input name='confirmPassword' type='password' required onChange={(event) => setConfirmPassword(event.target.value)}></input>
                    <div className='error_message'>{handlePassword()}</div>
                </div>

                <button type='submit' disabled={isDisabled()}>Submit</button>

            </form>
        </div>
    );
}

export default Form;