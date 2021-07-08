import React from 'react';
import styled from 'styled-components';
import ImageList from './ImageList.jsx';

const StyledHeader = styled.div`
font-family: Avenir Next;
font-size: 25px;
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 1%;
margin-bottom: 2%;
`;

const Logo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 20%;
border-radius: 100%;
margin-top: 2%;
`

function Home() {
  return (
    <div>
      <Logo src="https://res.cloudinary.com/teepublic/image/private/s--DP8Rc1g9--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1608669657/production/designs/17753921_0" alt="Logo" />
      <StyledHeader>Philosoraptor</StyledHeader>
      <ImageList />
    </div>
  );
}

export default Home;