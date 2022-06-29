import { useSelector } from 'react-redux';

function Products() {
  const Sale = useSelector((state) => state.Salered);
  return (

    <div>
      {Sale.Product.map(({
        type, price, img, article,
      }, idx) => (
        <div key={idx} className="product">
          <img src={img} alt="item" />
          <div>
            Тип товара:
            <div>{type}</div>
          </div>
          <div>
            Цена:

            {price}
          </div>
          <div>
            Артикул товара:

            <div>{article}</div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Products;
