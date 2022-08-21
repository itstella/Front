import React from 'react'
import tw from 'twin.macro';

const Container = tw.div`py-8`;
const Header = tw.h1`text-hotPink text-center text-6xl`;


function App() {
  return (
    <Container>
      <Header>Hello World</Header>
    </Container>
  );
}

export default App;
