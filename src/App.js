import { Fragment } from 'react';
import './App.css';
import Nav from './Component/Nav';
import Body from './Component/Body';
import Products from './Component/Products';
import Lastest from './Component/Lastest';
import Games from './Component/Games';
import New from './Component/New';
import Clothes from './Component/Clothes';
import History from './Component/History';
import Social from './Component/Social';
import Footer from './Component/Footer';
function App() {
  return (
    <Fragment>
        <Nav/>
        <Body/>
        <Products/>
        <Lastest/>
        <Games/>
        <New/>
        <Clothes/>
        <History/>
        <Social/>
        <Footer/>
    </Fragment>
  );
}

export default App;
