import React from 'react';
import styled from 'styled-components';
import ImageList from './ImageList.jsx';

const StyledHeader = styled.div`
font-family: Avenir Next;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 5%;
margin-bottom: 5%;
`;

function Home() {
  return (
    <div>
      <StyledHeader>Philosoraptor</StyledHeader>
      <ImageList />
    </div>
  );
}

export default Home;