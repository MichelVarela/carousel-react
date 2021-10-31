import react from 'react';
import './index.scss';

const DropdownMenu = () => {
    return ( 
        <div className="dropdown-menu">
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Configuration</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </div>
     );
}
 
export default DropdownMenu;