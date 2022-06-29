import CreateProduct from './CreateProduct';
import Product from './Product';
import './Showcase.css';

function Showcase() {
  return (
    <div>
      <CreateProduct />
      <div className="container">
        <Product />
      </div>
    </div>
  );
}

export default Showcase;
