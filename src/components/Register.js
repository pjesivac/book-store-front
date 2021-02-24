import React, { useState } from 'react';

export const Register = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",

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
        
        isValid = (/^[a-zA-Z0-9_-]{8,20}$/).test(state.username);
        isValid = isValid && (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email));
        isValid = isValid && (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(state.password));
        isValid = isValid && (state.password === state.passwordConfirm);
        console.log(isValid);




    }
    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input id="username" name="username" type="text" className="validate" onChange={handleChange} required />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input id="email" name="email" type="email" className="validate" onChange={handleChange} required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input id="password" name="password" type="password" className="validate" onChange={handleChange} required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input id="passwordConfirm" name="passwordConfirm" type="password" className="validate" onChange={handleChange} required />
                            <label htmlFor="passwordConfirm">Confirm password</label>
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
    );
};