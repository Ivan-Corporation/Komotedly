import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { Typography } from '@mui/material';
import UserForm from '../components/UserForm';
import { SIGNUP_USER } from '../gql/mutation';

const SignUp = props => {
  useEffect(() => {
    // update the document title
    document.title = 'Sign Up — Komotedly';
  });

  const client = useApolloClient();
  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: data => {
      // store the token
      localStorage.setItem('token', data.signUp);
      // update the local cache
      client.writeData({ data: { isLoggedIn: true } });
      // redirect the user to the homepage
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signup" />
      {/* if the data is loading, display a loading message*/}
      {loading && <Typography align='center' variant='h5' style={{marginTop:'40px'}}>Loading...</Typography>}
      {/* if there is an error, display a error message*/}
      {error && <Typography align='center' variant='h5' style={{marginTop:'40px'}}>Error {error.message}</Typography>}
    </React.Fragment>
  );
};

export default SignUp;
