import React from 'react'
import tw from 'twin.macro';
import Profile from '../images/corgi.jpeg';
import Cards from '../features/cards.js';

const Container = tw.div`py-8 
bg-[#f4f4f4] hover:bg-dustyPink transition duration-300 ease-in-out
 items-center justify-around 

`;
const ProfilePicture = tw(Profile) `rounded-full w-1 h-1`;
const Header = tw.h1`text-hotPink text-center text-6xl`;
const Subheader = tw.h4``;


function App() {
  return (
    <Container>
      <Header>Hello World</Header>
      {/* <Profile />  */}
      <Header>Images</Header>
      <Cards />
    </Container>
  );
}

export default App;
