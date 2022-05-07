import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/form.css'
import Button from './Button';
import Typed from 'react-typed';
import { Typography } from '@mui/material';





const UserForm = props => {
  // set the default state of the form
  const [values, setValues] = useState();

  // update the state when a user types in the form
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      {/* Display the appropriate form header */}
      {props.formType === 'signup' ? <Typography variant='h4' style={{marginTop:'18px'}} align='center'><b>
        <Typed
        strings={['Sign Up']}
        typeSpeed={100}

      /></b></Typography> : <Typography variant='h4' style={{marginTop:'18px'}} align='center'><b>
      <Typed
      strings={['Login']}
      typeSpeed={100}

    /></b></Typography>}
      {/* perform the mutation when a user submits the form */}
      <form class="login-box"
        onSubmit={event => {
          event.preventDefault();
          props.action({
            variables: {
              ...values
            }
          });
        }}
      >
        {props.formType === 'signup' && (
          <div class="user-box">
            <label htmlFor="username"></label>
            <input 
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={onChange}
            />
          </div>
        )}
        <div class="user-box">
        <label htmlFor="email"></label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        </div>
        <div class="user-box">

        <label htmlFor="password"></label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        </div>
        <Button type="submit"><a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
      </a></Button>
      </form>
    </div>
  );
};

export default UserForm;
