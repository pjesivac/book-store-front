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
    return (
        <div className="container">
            <div className="row">
                <form className="col-6" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleChange} required />
                        </div>
                        <div>
                            <button className="btn btn-success left" type="submit" name="submitButton">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}