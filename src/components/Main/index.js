import react from 'react';
import './index.scss';

import Slideshow from '../Slideshow';

const Main = () => {
    return ( 
        <main>
            <h3>Productos destacados</h3>
            <Slideshow />
            <h3>Productos nuevos</h3>
            <Slideshow />
        </main>
     );
}
 
export default Main;