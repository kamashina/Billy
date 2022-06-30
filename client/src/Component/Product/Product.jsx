import { useSelector } from 'react-redux';
import './Product.css';

function Products() {
  const Sale = useSelector((state) => state.Salered);
  return (

    <div>
      {Sale.Product.map(({
        type, price, img, article,
      }, idx) => (
        <div key={idx} className="product">
          <img src={img} alt="item" className="photo" />
          <div className="type">
            Тип товара:
            <div>{type}</div>
          </div>
          <div className="price">
            Цена:

            {price}
          </div>
          <div className="art">
            Артикул товара:

            <div>{article}</div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Products;
