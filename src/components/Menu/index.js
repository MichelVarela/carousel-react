import react, {useState} from 'react';
import Icon from '@mui/material/Icon';
import DropdownMenu from '../DropdownMenu';
import './index.scss';

const Menu = () => {

    const [dropdown, setDropdown] = useState(false);

    const openDropdown = () => {
        setDropdown(!dropdown);
    }

    return ( 
        <div className="menu">
            <div className="icon-menu" onClick={openDropdown}>
                <Icon>menu</Icon>
            </div>
            {dropdown ? <DropdownMenu className='effect'/> : null}
            <nav>
                <ul>
                    <li><a href="">Login</a></li>
                    <li><a href="">Configuration</a></li>
                    <li><a href="">About us</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;