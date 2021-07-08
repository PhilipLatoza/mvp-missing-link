import React from 'react';
import styled from 'styled-components';

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
`;

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

function Contact() {
  return (
    <div>
      <StyledHeader>Personal Contact</StyledHeader>

        <FormDiv>
          <label>
            <StyledInput
              type="text"
              placeholder="Name*"
              required
            />
          </label>
          <p> </p>
          <label>
            <StyledInput
              type="text"
              placeholder="Email*"
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