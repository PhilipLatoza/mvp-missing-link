import React, { useState } from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";

const Container = styled.div`
border: 1px solid black;
margin-top: 5%;
margin-left: 20%;
margin-right: 20%;
`;

const StyledButton = styled.button`
font-family: Avenir Next;
width: 20%;
height: 5vh;
color: white;
background-color: #1c1b1b;
cursor: pointer;
transition: 0.3s;
margin-bottom: 8%;
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
width: 50vw;
height: 4vh;
&:hover ${StyledInput} {
  background: #f4f4f4;
`;

const StyledArea = styled.textarea`
font-family: Avenir Next;
width: 50vw;
height: 60px;
&:hover ${StyledArea} {
  background: #f4f4f4;
`;

function Contact({ newMessage }) {
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');
  const [message, addMessage] = useState('');
  return (
    <Container>
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
          <StyledHeader>Personal Contact</StyledHeader>
            <StyledInput
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(event) => {
                addName(event.target.value);
              }}
              required
            />
          <p> </p>
            <StyledInput
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(event) => {
                addEmail(event.target.value);
              }}
              required
            />
          <p> </p>
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
          <p> </p>
          <StyledButton type="submit">SUBMIT</StyledButton>
        </FormDiv>
    </Container>
  );
}

export default Contact;