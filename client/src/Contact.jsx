import React, { useState } from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";

const StyledButton = styled.button`
font-family: Avenir Next;
width: 300px;
height: 45px;
color: white;
background-color: #1c1b1b;
cursor: pointer;
transition: 0.3s;
&:hover ${StyledButton} {
  background: #C50000;
  color: white;
  border: none;
}
`

const StyledHeader = styled.div`
font-family: Avenir Next;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10%;
margin-bottom: 2%;
`;

const FormDiv = styled.form`
font-family: Avenir Next;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StyledInput = styled.input`
font-family: Avenir Next;
width: 800px;
height: 40px;
`;

const StyledArea = styled.textarea`
font-family: Avenir Next;
width: 801px;
height: 60px;
`;

function Contact({ newMessage }) {
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');
  const [message, addMessage] = useState('');
  return (
    <div>
      <StyledHeader>Personal Contact</StyledHeader>

        <FormDiv
          type="submit"
          value="Submit"
          onSubmit={(event) => {
            event.preventDefault();
            const oneMessage = {
              name: name,
              email: email,
              message: message
            }
            newMessage(oneMessage);
            addName(''),
            addEmail(''),
            addMessage('')
          }}
        >
          <label>
            <StyledInput
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(event) => {
                addName(event.target.value);
              }}
              required
            />
          </label>
          <p> </p>
          <label>
            <StyledInput
              type="text"
              placeholder="Email*"
              value={email}
              onChange={(event) => {
                addEmail(event.target.value);
              }}
              required
            />
          </label>
          <p> </p>
          <label>
            <StyledArea
              type="text"
              placeholder="Message*"
              rows="5"
              cols="100"
              value={message}
              onChange={(event) => {
                addMessage(event.target.value);
              }}
              required
            />
          </label>
          <p> </p>
          <StyledButton type="submit">SUBMIT</StyledButton>
        </FormDiv>
    </div>
  );
}

export default Contact;