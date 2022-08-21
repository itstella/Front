import React from 'react'
import tw from 'twin.macro';
import Profile from '../images/bonsai.png';

const Container = tw.div`py-8`;
const ProfilePicture = tw(Profile) `rounded-full w-10 h-10`;
const Header = tw.h1`text-hotPink text-center text-6xl`;
const Subheader = tw.h4``;


function App() {
  return (
    <Container>
        {/* <Profile /> */}
      <Header>Hello World</Header>
    </Container>
  );
}

export default App;
