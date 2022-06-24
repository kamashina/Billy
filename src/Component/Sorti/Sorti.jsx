import './Sorti.css';
import React, { useState } from 'react';

function Sorti() {
  let arr = [];
  let arr2 = [];
  const [value, setValue] = useState();
  const [sort, setSort] = useState();
  const [izn, setIzn] = useState();
  function Withconsole() {
    arr = value.split(' ');
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = parseInt(arr[i], 10);
    }
    setIzn(() => {
      const izna = [];
      for (let h = 0; h < arr.length; h += 1) {
        izna[h] = <ul className="sorti-neon-element">{arr[h]}</ul>;
      }
      return izna;
    });
    // eslint-disable-next-line no-shadow
    function quicksort(arr) {
      if (arr.length <= 1) {
        return arr;
      }
      const opora = arr[0];
      const left = [];
      const right = [];
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < opora) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      // eslint-disable-next-line no-param-reassign
      arr = quicksort(left).concat(opora, quicksort(right));
      return arr;
    }
    setSort(() => {
      arr2 = quicksort(arr);
      const sorti = [];
      for (let h = 0; h < arr2.length; h += 1) {
        sorti[h] = <ul className="sorti-neon-element">{arr2[h]}</ul>;
      }
      return sorti;
    });
  }
  function clearState() {
    setSort();
    setIzn();
  }
  return (
    <sorti className="Sorti">
      <div>
        <input type="text" placeholder="Через пробел..." onChange={(event) => setValue(event.target.value)} />
      </div>
      <div>
        <line onClick={clearState}>Очистить</line>
        <line onClick={Withconsole}>Отсортировать</line>
      </div>
      <div id="sorti-element">
        <p>Изначальный массив: </p>
        <p>{izn}</p>
        <p>Сортированный массив: </p>
        <p>{sort}</p>
      </div>
    </sorti>
  );
} export default Sorti;
