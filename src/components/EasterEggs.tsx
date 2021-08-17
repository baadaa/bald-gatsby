import React from 'react';
import { useKonami } from 'react-konami-code';
import '../styles/eggs.css';

const EasterEggs = () => {
  const blur = () => {
    document.querySelector('html').style.filter = 'blur(15px)';
  };
  const shake = () => {
    document.querySelector('html').classList.add('shake');
  };
  const flicker = () => {
    document.querySelector('html').classList.add('flicker');
  };
  const reset = () => {
    document.querySelector('html').style.filter = null;
    document.querySelector('html').classList.remove('shake');
    document.querySelector('html').classList.remove('flicker');
  };
  return (
    <>
      {useKonami(shake, { code: [83, 72, 65, 75, 69] })}
      {useKonami(blur, { code: [66, 76, 85, 82] })}
      {useKonami(flicker, { code: [70, 76, 73, 67, 75, 69, 82] })}
      {useKonami(reset, { code: [82, 69, 83, 69, 84] })}
    </>
  );
};

export default EasterEggs;
