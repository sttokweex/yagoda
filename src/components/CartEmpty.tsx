import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Для того, чтобы заказать средства для ухода, перейдите в каталог.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/home" className="button button--black">
      <span>Перейти в каталог</span>
    </Link>
  </div>
);
