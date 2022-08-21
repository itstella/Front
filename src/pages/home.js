import React from 'react'
import tw from 'twin.macro';

import Header from '../components/headers/homeHeader';

const Container = tw.div`py-8`;


function App() {
  return (
    <Container>
      
      <Header />
    </Container>
  );
}

export default App;
