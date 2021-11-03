import react, {useRef, useEffect} from 'react';
import Icon from '@mui/material/Icon';
import './index.scss';

import Slide from '../layout/Slide';

const images = [
    {
        id: 1,
        name: '1.jpg',
        description: '15% off Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        name: '2.jpg',
        description: '30% off Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 3,
        name: '3.jpg',
        description: '55% off Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 4,
        name: '4.jpg',
        description: '60% off Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
];

const Slideshow = () => {

    const slideshow = useRef(null); // Hook useRef siempre va dentro del componente, nos permite acceder a las referencias que determinemos y establecerlas
    const slideAuto = useRef(null);

    const next = () => {
        if (slideshow.current.children.length > 0) { // si el slideshow accediendo al current que nos devuelve la etiqueta y su contenido, tiene etiquetas hijas (es mayor a cero)
            
            const firstEl = slideshow.current.children[0]; // obtenemos primer elemento hijo
            
            slideshow.current.style.transition = `500ms ease-out all`; // establecemos transición para el slideshow

            const sizeSlide = slideshow.current.children[0].offsetWidth; // obtenemos el ancho del slide actual

            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`; // movemos el slideshow

            const transition = () => { // reiniciamos la posicion del slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`; // que vuelva a su posicion original (regresa a 0 al contrario de la linea 18)

                slideshow.current.appendChild(firstEl); // tomamos el primer elemento y lo enviamos al final

                slideshow.current.removeEventListener('transitionend', transition);
            };

            slideshow.current.addEventListener('transitionend', transition); // eventListener para cuando termina la animacion que pasamos como parametro
            
        }
    }
    
    const prev = () => {
        if (slideshow.current.children.length > 0) { // si el slideshow accediendo al current que nos devuelve la etiqueta y su contenido, tiene etiquetas hijas (es mayor a cero)

            const index = slideshow.current.children.length - 1; // obtenemos la cantidad de elementos -1
            
            const lastEl = slideshow.current.children[index]; // obtenemos el ultimo elemento hijo

            slideshow.current.insertBefore(lastEl, slideshow.current.firstChild); // insertamos el ultimo elemento antes de
            
            slideshow.current.style.transition = 'none';
            const sizeSlide = slideshow.current.children[0].offsetWidth; // obtenemos el ancho del slide actual
            slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '500ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`; // movemos el slideshow
            }, 30)
            
        }
    }

    useEffect(() => { // nos permite pasarle una funcion que se va a ejecutar cada vez que tengamos un renderizado en la app
        slideAuto.current = setInterval(() => { // ejecutamos cada .5s la funcion next()
            next();
        }, 5000);

        slideshow.current.addEventListener('mouseenter', () => { // eliminamos los intervalos cada vez que el mouse este en el carousel
            clearInterval(slideAuto.current);
        });

        slideshow.current.addEventListener('mouseleave', () => { // eliminamos los intervalos
            slideAuto.current = setInterval(() => { // volvemos a ejecutar cada .5s la funcion next() al quitar el mouse del carousel
                next();
            }, 5000);
        });

    }, []);

    return ( 
        <div className='contenedor-principal'>
            <div className="contenedor-slideshow" ref={slideshow}>
                {images.map(el => <Slide name={el.name} id={el.id} description={el.description}/>)}
            </div>
            <div className='controles'>
                <button onClick={prev}><Icon>chevron_left</Icon></button>
                <button onClick={next}><Icon>chevron_right</Icon></button>
            </div>
        </div>
     );
}
 
export default Slideshow;