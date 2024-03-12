
import './App.css';
import Ghost from './Components/Ghost';
import ArcadiaDroptail from './Components/ArcadiaDroptail';
import {  ChakraProvider } from '@chakra-ui/react';
import StickyNav from './Components/StickyNav';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import Card from './Components/Card';




function App() {
  const lines=[{
    line1:"ROLLS-ROYCE COACHBUILD PRESENTS",
    line2:"ARCADIA DROPTAIL",
    line3:"ghost"
  }]

  return (
    <>
      <ChakraProvider>
        <StickyNav ></StickyNav>
        <Ghost lines={lines} />
        <ArcadiaDroptail lines={lines} />
        <Explore/>
        <div className=' '>
      <Card/>
      </div>
        <Footer/>
      </ChakraProvider>
    </>


  );
}

export default App;
