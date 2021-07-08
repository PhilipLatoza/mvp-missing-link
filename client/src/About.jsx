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

const StyledParagraph = styled.p`
font-family: Avenir Next;
font-size: 14px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10%;
padding-left: 20%;
padding-right: 20%;
`;

function About() {
  return (
    <div>
      <StyledHeader>About</StyledHeader>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor ornare urna eget ornare. Suspendisse finibus viverra nisi id pellentesque. Nullam eget scelerisque lorem, sed rhoncus tellus. Praesent luctus quis mi id volutpat. Sed commodo tempor mi ut feugiat. Quisque scelerisque vulputate metus, consectetur laoreet sem cursus ac. Nullam enim nulla, pulvinar a efficitur vel, dignissim eget ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam euismod lobortis leo nec mattis.
        <p> </p>
        Integer condimentum ipsum eu elit sagittis, ut lacinia risus dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec ipsum id arcu interdum semper. Integer in lacinia urna, vel accumsan ex. Mauris fringilla elementum pharetra. Vivamus condimentum id mauris id iaculis. Curabitur faucibus gravida dui sit amet consequat. In at odio elementum, accumsan diam non, volutpat tellus. In rutrum id odio quis aliquet. Morbi erat tellus, maximus at elementum at, accumsan eget odio. Ut quis turpis congue, condimentum libero quis, lobortis ligula. Cras semper orci vitae dui fringilla, vel feugiat tortor fermentum.
      </StyledParagraph>
    </div>
  );
}

export default About;