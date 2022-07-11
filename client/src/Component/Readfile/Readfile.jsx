import React, { useState } from 'react';
import './Readfile.css';

function Readfile() {
  const [zar, setZar] = useState();
  const [voz, setVoz] = useState();
  const [fam, setFam] = useState();
  const arrFam = [];
  const arrAge = [];
  const arrZp = [];
  let text = useState();
  async function onChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      text = event.target.result;
    };
    reader.readAsText(file);
  }
  function click() {
    let arr = [];
    arr = text.split(' ');
    let fama = 0;
    let age = 0;
    let Zp = 0;
    for (let i = 0; i < arr.length; i += 3) {
      arrFam[fama += 1] = arr[i];
    }
    for (let a = 1; a < arr.length; a += 3) {
      arrAge[age += 1] = arr[a];
    }
    for (let z = 2; z < arr.length; z += 3) {
      arrZp[Zp += 1] = arr[z];
    }
    setZar(() => {
      const zarplata = [];
      for (let i = 0; i < arrZp.length; i += 1) {
        zarplata[i] = <ul>{arrZp[i]}</ul>;
      }
      return zarplata;
    });
    setVoz(() => {
      const vozrast = [];
      for (let i = 0; i < arrAge.length; i += 1) {
        vozrast[i] = <ul>{arrAge[i]}</ul>;
      }
      return vozrast;
    });
    setFam(() => {
      const familia = [];
      for (let i = 0; i < arrFam.length; i += 1) {
        familia[i] = <ul>{arrFam[i]}</ul>;
      }
      return familia;
    });
  }
  return (
    <div className="readfile">
      <div className="upload-container">
        <input type="file" name="file" onChange={(event) => onChange(event)} />
        <p>Загрузить</p>
        <table>
          Фамилия:
          {fam}
        </table>
        <table>
          Маршрут:
          {voz}
        </table>
        <table>
          Номер:
          {zar}
        </table>
        <button type="button" onClick={click}>Прочитать</button>
      </div>
    </div>
  );
} export default Readfile;
