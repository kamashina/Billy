import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProd } from '../../store/sale/action';

const CreateProduct = () => {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState('');
  const [rub, setRub] = useState('');
  const dispatch = useDispatch();

  function addProduct() {
    const NewProduct = {
      type: name,
      price: rub,
      img: '',
      article: Math.floor(Math.random() * 10000),
    };
    setProduct([...product, NewProduct]);
    dispatch(setProd([...product, NewProduct]));
  }
  return (
    <div>
      <title>Товары</title>
      <input
        onChange={(evet) => setName(evet.target.value)}
        placeholder="Введите тип товара"
      />
      <input
        onChange={(evet) => setRub(evet.target.value)}
        placeholder="Введите цену"
      />
      <button
        onClick={addProduct}
        type="button"
      >
        Добавить товар
      </button>
    </div>
  );
};

export default CreateProduct;
