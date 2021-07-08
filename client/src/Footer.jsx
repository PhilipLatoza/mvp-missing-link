import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const StyledDiv = styled.div`
font-family: Avenir Next;
font-size: 14px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 5%;
`;

const IconList = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 3%;
margin-bottom: 3%
`;

const Icon = styled.a`
display: flex;
padding-left: 10px;
padding-right: 10px;
text-decoration: none;
color: black;
`;

const Footer = (props) => (
  <div>
    <StyledDiv>
      Connect
    </StyledDiv>
    <IconList>
      <Icon href="https://www.facebook.com/" target="_blank">
      <FacebookIcon />
      </Icon >
      <Icon href="https://www.twitter.com/" target="_blank">
      <TwitterIcon />
      </Icon>
      <Icon href="https://www.instagram.com/" target="_blank">
      <InstagramIcon />
      </Icon>
      <Icon href="https://www.youtube.com/" target="_blank">
      <YouTubeIcon />
      </Icon>
      <Icon href="https://www.linkedin.com/" target="_blank">
      <LinkedInIcon />
      </Icon>



    </IconList>
  </div>

)

export default Footer;