import react from 'react';
import './index.scss';

const Slide = (props) => {
    return ( 
        <div className='slide'>
            <a href="#">
                <img src={`/images/slideshow/${props.name}`} alt={props.id} />
            </a>
            <div className='text-slide'>
                <p>{props.description}</p>
            </div>
        </div>
     );
}
 
export default Slide;