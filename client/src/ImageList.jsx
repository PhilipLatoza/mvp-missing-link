/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import Styled from 'styled-components';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Modal from 'react-modal';
import { useState } from 'react';

const Image = Styled(ImageListItem)`
&:hover ${Image} {
  border: none;
  cursor: pointer;
}
`

const StyledDiv = Styled.div`
margin-top: 3%;
padding-left: 25%;
padding-right: 25%;
`;

const StyledImg = Styled.img`
width: 100%;
height: 100%;
`;

const customStyles = {
  content: {
    // width: 1800px;
    // height: 847px;

    // top: 'auto',
    // left: 'auto',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-75%',
    // transform: 'translate(10%, 25%)',
  },
};

export default function StandardImageList() {
  const [imageIsOpen, setImageIsOpen] = useState(false);
  const [source, setSource] = useState('');
  return (
    <StyledDiv>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <Image
            type="submit"
            onClick={() => {
              setImageIsOpen(true)
              setSource(item.img)
            }}

            key={item.img}
          >
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                  ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </Image>
        ))}
      </ImageList>
      <Modal
        isOpen={imageIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setImageIsOpen(false)}
        style={customStyles}
      >
        <StyledImg src={source} alt="expandedImage" />
      </Modal>
    </StyledDiv>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];
