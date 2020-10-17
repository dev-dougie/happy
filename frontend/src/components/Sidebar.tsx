import React  from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../Assets/localizador-mapa.svg';

import '../styles/components/sidebar.css'

export default function SideBar(){

    const {goBack} = useHistory();

    return(
        <aside className = "app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />
        <footer>
            <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="rgba(0, 0, 0, 0.6)" />
          </button>
        </footer>
      </aside>
    );
}