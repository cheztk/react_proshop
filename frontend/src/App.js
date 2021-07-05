import logo from './logo.svg';
import React from 'react';
import {Container} from "react-bootstrap";
import Header from './components/Header';
import Footer from "./components/Footer";
import './App.css';
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
        <Header/>

       <main className='py-3'>
           <Container>
               <HomeScreen/>
           </Container>

       </main>
        <Footer/>

    </>
  );
}

export default App;
