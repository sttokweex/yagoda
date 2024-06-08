import React from 'react';

const OrderSuccess: React.FC = () => {
  return (
    <div className="container container--order-success">
      <div className="order-success">
        <h2 className="order-success__title">Заказ оформлен!</h2>
        <p className="order-success__message">Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.</p>
      </div>
    </div>
  );
};

export default OrderSuccess;
