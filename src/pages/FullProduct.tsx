import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Product {
  imageUrl: string;
  title: string;
  price: number;
}

const FullProduct: React.FC = () => {
  const [product, setProduct] = React.useState<Product | null>(null);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() { 
      try {
        const { data } = await axios.get('https://664cc7fbede9a2b556519a1f.mockapi.io/items/${id}');
        setProduct(data);
      } catch (error) {
        console.error('Ошибка при получении продукта!', error);
        alert('Ошибка при получении продукта!');
        navigate('/home');
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id, navigate]);

  if (!product) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <h4>{product.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullProduct;
