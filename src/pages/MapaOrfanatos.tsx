import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../styles/global.css'
import '../styles/pages/mapa-orfanatos.css'

import LocalMapa from '../images/LocalMapa.svg'

 function MapaOrfanatos() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={LocalMapa} alt="Icone dos orfanatos"/>
        
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Francisco Beltrão</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[ -26.0827406,-53.0781521 ]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
         <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to='' className='adicionar-orfanato'>
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default MapaOrfanatos;