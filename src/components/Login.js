import React, { useState } from 'react';

export const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //validating input
        let isValid = true; 
        isValid = isValid && (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email));
        isValid = isValid && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(state.password));
        //sendDetailsToServer(isValid);
    }
    /* const sendDetailsToServer = (isDataValid) => {
        if(props.isDataValid) {
            props.showError(null);
            const loginData={
                "email":state.email,
                "password":state.password,
            }
            axios.post(API_BASE_URL+'/user/register', loginData)
                .then(function (response) {
                    if(response.status === 200){
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    } */
    return(
        <div className="container">
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input id="email" name="email" type="email" className="validate" onChange={handleChange} required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input id="password" name="password" type="password" className="validate" onChange={handleChange} required />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn waves-effect waves-light left" type="submit" name="submitButton">Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}