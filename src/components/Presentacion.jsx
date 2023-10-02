

import './Presentacion.css';
import { Link } from 'react-router-dom';



const Presentacion = () => {
    return (
        <>
            <div className='banner-container'>
                <h1>CHARS TECNOLOGY</h1>
                <p>Bienvenido a la mejor Tienda en Tecnologia</p>
                <Link to= "/ItemlistContainer" >
        <button>TIENDA</button>
      </Link>
            </div>
        </>
    );
}

export default Presentacion;