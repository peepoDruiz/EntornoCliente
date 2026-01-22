import React from 'react'
import Interprete from './Interprete.jsx';
import '../css/Elenco.css';

const Elenco = () => {
  return (
    <>
    <div className='elenco'>
      <Interprete actor="Ralph Fiennes" personaje="M. Gustave" foto="https://image.tmdb.org/t/p/w500/u29BOqiV5GCQ8k8WUJM50i9xlBf.jpg"/>
      <Interprete actor="F. Murray Abraham" personaje="Mr. Moustafa" foto="https://image.tmdb.org/t/p/w500/p2RYVGdrcP0m70BkkiKcwyrDeim.jpg"/>
      <Interprete actor="Mathieu Amalric" personaje="Serge X." foto="https://image.tmdb.org/t/p/w500/j9PWIR367ikxxPIrIKlAiEswZDm.jpg"/>
      <Interprete actor="Adrien Brody" personaje="Dmitri" foto="https://image.tmdb.org/t/p/w500/qBc7ahQrpVpcllaZ5hkivsOEb3C.jpg"/>
      <Interprete actor="Willem Dafoe" personaje="Jopling" foto="https://image.tmdb.org/t/p/w500/ui8e4sgZAwMPi3hzEO53jyBJF9B.jpg"/>
      
    </div>
    </>
  );
}

export default Elenco