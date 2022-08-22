import React from 'react'
import tw from 'twin.macro';
import Corgi from '../images/corgi.jpeg';
import Cards from '../features/cards.js';

const Container = tw.div`py-8 
bg-[#f4f4f4] hover:bg-dustyPink transition duration-300 ease-in-out
 items-center justify-around `
 ;

 const ImageContainer = tw.div`flex justify-center items-center`;

const Header = tw.h1`text-hotPink text-center text-6xl`;
const Subheader = tw.h4``;


function App() {
  return (
    <Container>
      <Header>Hello World</Header>
      <ImageContainer>
      <img src={Corgi}  alt={''} />
      </ImageContainer>
      
      <Cards />
    </Container>
  );
}

export default App;
