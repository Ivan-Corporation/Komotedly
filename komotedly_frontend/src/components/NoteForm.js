import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
  
`;

const Form = styled.form`
  height: 100%;
  z-index: 20;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 125px;
  border-radius: 6px;
  z-index: 20;

`;

const NoteForm = props => {
  // set the default state of the form
  const [value, setValue] = useState({ content: props.content || '' });

  // update the state when a user types in the form
  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Wrapper>
      <br/>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
              ...value
            }
          });
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Save 💾</Button>
      </Form>
    </Wrapper>
  );
};


{/* <TextField id="outlined-basic" label="New note" variant="filled" multiline style={{marginTop:'50px'}} fullWidth color="warning"
        onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
              ...value
            }
          });
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        
      </TextField>
      <Button endIcon={<SendIcon/>} type="submit" variant='contained' style={{color: 'white', marginTop:'20px'}} color='warning'>Save</Button> */}


export default NoteForm;
