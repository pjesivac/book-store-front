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
                <form className="col-6" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="username" className="form-control" id="username" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwordConfirm" className="form-label">Repeat password</label>
                            <input type="passwordConfirm" className="form-control" id="passwordConfirm" onChange={handleChange} required />
                        </div>
                        <div>
                            <button className="btn btn-success left" type="submit" name="submitButton">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};