import React from 'react';
import '../scss/components/_header.scss';
interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`menu ${isOpen ? 'menu-open' : ''}`}>
            <button className="menu-close" onClick={onClose}>Close</button>
            <nav>
                <ul>
                    <li><a href="/home">Каталог товаров</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                    <li><a href="#section4">Section 4</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
