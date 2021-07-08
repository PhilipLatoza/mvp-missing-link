import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
font-family: Avenir Next;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 15%;
`;

function Contact() {
  return (
    <div>
      <StyledHeader>Contact</StyledHeader>
    </div>
  );
}

export default Contact;