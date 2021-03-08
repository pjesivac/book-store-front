import React, {  useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';


export const Contact = () => {
  const [state, setState] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactData = {
      email: state.email,
      message: state.message,
    };



  };
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <h3>Contact us!</h3>
      <br></br>
      <h5>If you are facing any issues on our site, or you have suggestions for improving it, please contact us using the form below.</h5>
      <form className="contact-form" onSubmit={handleSubmit} style={{width: 800}}>    
      <br></br>
      <br></br>
        <FormControl style={{width: 800}}>
          <InputLabel htmlFor="email" >Email address</InputLabel>
          <Input id="email" type="email" onChange={handleChange} required/>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
        <FormControl style={{width: 800}}>
          <InputLabel htmlFor="message">Your Message</InputLabel>
          <Input id="message" type="text" onChange={handleChange} required></Input>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
        <Button type="submit" variant="contained" onClick={handleSubmit}>Send</Button>
      </form>
    </Container>
  );
};
