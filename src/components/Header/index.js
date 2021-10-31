import react from 'react';
import Menu from '../Menu';
import './index.scss';

const Header = () => {
    return ( 
        <header>
            <a href="#">
                <img src='/images/logo.png' alt='logo' />
            </a>
            <Menu />
        </header>
     );
}
 
export default Header;