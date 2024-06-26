import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoSvg from '../assets/img/logo.svg';
import menuSvg from '../assets/img/burger.svg';
import exitSvg from '../assets/img/exit.svg';
import { selectCart } from '../redux/cart/selectors';

export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0,
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const overlay = document.getElementById('overlay');
    const body = document.querySelector('body');

    if (overlay && body) {
      overlay.style.display =
        overlay.style.display === 'block' ? 'none' : 'block';
      body.style.overflow = body.style.overflow === '' ? 'hidden' : '';
    }
  };
  const handleLinkClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'A' || target.tagName === 'IMG') {
      toggleMenu();
    }
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header__menu-button">
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: ' rgba(0, 0, 0, 0.5)',
              display: 'none',
              zIndex: '9',
            }}
            id="overlay"
          ></div>
          <button onClick={toggleMenu}>
            <img width="30" src={menuSvg} alt="Menu" />
          </button>
          {menuOpen && (
            <div onClick={handleLinkClick} className="header__menu-dropdown">
              <button
                className="close-button"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                }}
              >
                <img width="47" height="47" src={exitSvg} alt="exit" />
              </button>{' '}
              {/* Крестик для закрытия меню */}
              <Link to="/" className="menu__logo">
                <div className="">
                  <img width="120" src={logoSvg} alt="Pizza logo" />
                </div>
              </Link>
              <a href="https://n900730.yclients.com" target="_blank">
                Онлайн запись
              </a>
              <Link to="/home">Каталог товаров</Link>
              <Link to="/service-catalog">Каталог услуг</Link>
              <Link to="/about-us">О нас</Link>
              <Link to="/action">Акции</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
          )}
        </div>

        <Link to="/">
          <div className="header__logo">
            <img width="120" src={logoSvg} alt="Pizza logo" />
          </div>
        </Link>
        <div className="header__cart">
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
