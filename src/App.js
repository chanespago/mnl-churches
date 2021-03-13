import React, {useState} from 'react'
import { GlobalStyle } from './components/globalStyles'
import { Navbar } from './components/Navbar'
import { Jumbotron } from './components/Jumbotron'
import { Modal } from './components/Modal'
import { Cards } from './components/Cards'
import { CardItems } from './components/CardItems'
import { Footer } from './components/Footer'
import './App.css'
import './assets/css/Cards.css'

// Images Import
import img1 from './assets/img/manila-cathedral.jpg';
import img2 from './assets/img/mt-carmel-shrine.jpg'
import img3 from './assets/img/Our_Lady_of_Grace_Church_in_Makati.jpg'
import img4 from './assets/img/our-lady-of-the-abandoned.jpg'
import img5 from './assets/img/parish-of-the-hearts-of-jesus-and-mary.jpg'
import img6 from './assets/img/quiapo-church.jpg'
import img7 from './assets/img/san-agustin.jpg'
import img8 from './assets/img/san-sebastian-cathedral.jpg'
import img9 from './assets/img/santuario-del-sto-cristo.jpg'
import img10 from './assets/img/sta-clara-de-montefalco.jpg'


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
            onClick={() => openModal({img1}.img1, "Manila Cathedral")} 
            src={img1}
            className="cards__item__img" 
            alt="Manila Cathedral"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img2}.img2, "Our Lady of Mt. Carmel Shrine")} 
            src={img2} 
            className="cards__item__img" 
            alt="Our Lady of Mt. Carmel Shrine"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img3}.img3, "Our Lady of Grace Church in Makati")} 
            src={img3} 
            className="cards__item__img" 
            alt="Our Lady of Grace Church in Makati"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img4}.img4, "Our Lady of the Abandoned")} 
            src={img4} 
            className="cards__item__img" 
            alt="Our Lady of the Abandoned"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img5}.img5, "Parish of the Hearts of Jesus and Mary")} 
            src={img5}
            className="cards__item__img" 
            alt="Parish of the Hearts of Jesus and Mary"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img6}.img6, "Quiapo Church")} 
            src={img6}
            className="cards__item__img" 
            alt="Quiapo Church"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img7}.img7, "San Agustin Church")} 
            src={img7}
            className="cards__item__img" 
            alt="San Agustin Church"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img8}.img8, "San Sebastian Cathedral")} 
            src={img8} 
            className="cards__item__img" 
            alt="San Sebastian Cathedral"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img9}.img9, "Santuario Del Sto. Cristo")} 
            src={img9}
            className="cards__item__img" 
            alt="Santuario Del Sto. Cristo"
          />
        </CardItems>
        <CardItems>
          <img 
            onClick={() => openModal({img10}.img10, "Sta. Clara De Montefalco")} 
            src={img10} 
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
