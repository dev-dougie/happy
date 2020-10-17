import React, { useEffect, useState }from 'react';

import {Link, useHistory} from 'react-router-dom';
import { FiPlus , FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import  mapMarker  from "../Assets/localizador-mapa.svg";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'
import api from '../services/api';

interface Orphanage {
    id: number,
    latitude: number,
    longitude: number,
    name: string
}



function OrphanagesMap(){ 
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);


    //1º: Ação a ser executada
    //2º: Quando será executada: [] 
    //Muda quando as informações do segundo parâmetro mudarem
    useEffect(()=> {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        });
    } , [])

    const {goBack} = useHistory();
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita 😄 </p>
                </header>

                <footer>
                    <strong>Barueri</strong>
                    <span>São Paulo</span>
                </footer>

                <button type="button" onClick ={goBack}>
                        <FiArrowLeft size={24} color="rgba(0, 0, 0, 0.6)" />
                </button>
            </aside>

            <Map 
                center = {[-23.4998514,-46.8543534]}
                zoom = {15}
                style = {{width: '100%', height: '100%'}}
             >
                { /*<TileLayer  url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/ }
                <TileLayer url = {`https://api.mapbox.com/styles/v1/mapbox/${new Date().getHours() > 18 && new Date().getHours() < 6 ? 'dark' : 'light'}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer>
                
                {orphanages.map(orphanage => {
                    return(
                        <Marker 
                        icon= {mapIcon}
                        position = {[orphanage.latitude, orphanage.longitude]}
                        key = {orphanage.id}
                >
                    <Popup closeButton = {false} minWidth = {240} maxWidth = {240} className = 'map-popup'>
                            {orphanage.name}
                            <Link to = {`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size = {20} color= "#fff"/>
                            </Link>
                    </Popup>
                </Marker>
                    )
                })}

             </Map>


            <Link to = "/orphanages/create" className = "create-orphanage">
                <FiPlus size = {32} color = "#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;