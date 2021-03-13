import React, {useState} from 'react'
import { GlobalStyle } from './components/globalStyles'
import { Navbar } from './components/Navbar'
import { Jumbotron } from './components/Jumbotron'
import { Modal } from './components/Modal'
import { Cards } from './components/Cards'
import { CardItems } from './components/CardItems'
import './App.css'
import './assets/css/Cards.css'
import { Footer } from './components/Footer'

function App() {

  const [showModal, setShowModal] = useState(false);
  const [displayUrl, setDisplayUrl] = useState("");
  const [displayID, setDisplayID] = useState("");

  const openModal = (_src, _alt) => {
    setShowModal(prev=>!prev);
    setDisplayUrl(_src);
    setDisplayID(_alt);
  }

  return (
    <>
      <Navbar/>
      <Modal showModal={showModal} setShowModal={setShowModal} setImg={displayUrl} setID={displayID}/>
      <Jumbotron/>
      <Cards>
        <CardItems>
          <img 
            onClick={() => openModal("/img/manila-cathedral.jpg", "Manila Cathedral")} 
            src="/img/manila-cathedral.jpg" 
            className="cards__item__img" 
            alt="Manila Cathedral"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/mt-carmel-shrine.jpg", "Mt. Carmel Shrine")} 
            src="/img/mt-carmel-shrine.jpg" 
            className="cards__item__img" 
            alt="Mt. Carmel Shrine"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/Our_Lady_of_Grace_Church_in_Makati.jpg", "Our Lady of Grace Church in Makati")} 
            src="/img/Our_Lady_of_Grace_Church_in_Makati.jpg" 
            className="cards__item__img" 
            alt="Our Lady of Grace Church in Makati"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/our-lady-of-the-abandoned.jpg", "Our Lady of the Abandoned")} 
            src="/img/our-lady-of-the-abandoned.jpg" 
            className="cards__item__img" 
            alt="Our Lady of the Abandoned"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/parish-of-the-hearts-of-jesus-and-mary.jpg", "Parish of the Hearts of Jesus and Mary")} 
            src="/img/parish-of-the-hearts-of-jesus-and-mary.jpg" 
            className="cards__item__img" 
            alt="Parish of the Hearts of Jesus and Mary"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/quiapo-church.jpg", "Quiapo Church")} 
            src="/img/quiapo-church.jpg" 
            className="cards__item__img" 
            alt="Quiapo Church"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/san-agustin.jpg", "San Agustin Church")} 
            src="/img/san-agustin.jpg" 
            className="cards__item__img" 
            alt="San Agustin Church"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/san-sebastian-cathedral.jpg", "San Sebastian Cathedral")} 
            src="/img/san-sebastian-cathedral.jpg" 
            className="cards__item__img" 
            alt="San Sebastian Cathedral"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/santuario-del-sto-cristo.jpg", "Santuario Del Sto. Cristo")} 
            src="/img/santuario-del-sto-cristo.jpg" 
            className="cards__item__img" 
            alt="Santuario Del Sto. Cristo"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal("/img/sta-clara-de-montefalco.jpg", "Sta. Clara De Montefalco")} 
            src="/img/sta-clara-de-montefalco.jpg" 
            className="cards__item__img" 
            alt="Sta. Clara De Montefalco"
          />
        </CardItems>
      </Cards>
      <Footer/>
      <GlobalStyle />
    </>
  );
}

export default App;
