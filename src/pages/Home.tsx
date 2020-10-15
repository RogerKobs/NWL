import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import '../styles/global.css'
import '../styles/pages/home.css'

import logoImg from '../images/Logo.svg'

export default function Home() {
  return (
    <div id="page-home">
    <div className="content-wrapper">
      <img src={logoImg} alt="Logo"/>

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças</p>
      </main>

      <div className="location">
        <strong>Francisco Beltrão</strong>
        <p>Paraná</p>
      </div>

      <Link to="/mapa" className='enter-app'>
        <FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)'/>
      </Link>
    </div>
  </div>
  )
}
