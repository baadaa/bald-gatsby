import React, { useState, useEffect } from 'react';
import { useKonami } from 'react-konami-code';
import '../styles/eggs.css';

const EasterEggs = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [errorIsVisible, setErrorIsVisible] = useState(false);
  const audio = new Audio('/error.mp3');
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
    setErrorIsVisible(false);
  };
  useEffect(() => {
    audio.load();
  }, []);
  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);
  const showError = () => {
    audio.play();
    setErrorIsVisible(true);
  };
  return (
    <>
      {useKonami(shake, { code: [83, 72, 65, 75, 69] })}
      {useKonami(blur, { code: [66, 76, 85, 82] })}
      {useKonami(flicker, { code: [70, 76, 73, 67, 75, 69, 82] })}
      {useKonami(reset, { code: [82, 69, 83, 69, 84] })}
      {useKonami(showError, {
        code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      })}
      {errorIsVisible && (
        <div className="errTakeover">
          {/* eslint-disable */}
          {/* non-interactive elements shouldn't have click handler, but this isn't really to be functional anyways */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAACCBAMAAACTP+HkAAAAJFBMVEXAwMAAAAD///8AAMjAwMB4eHhgAAD/AACZmZnf399/f3+/v7854MWTAAADyElEQVR4nO2cO3LbMBCGicIalUBygQSaTIpUcSYHSZHelezahdm68ugKSbqU1A2ky2V38SCAFSmMQxLMBL8kmgDx+Li7hEhCdKNXItl8+L4OAcmXVehrJWGqJF639sh5W57kB+mnIbndYdZO2406Lqs1vHXawmQkv86oU0Tiu46L7nrGWUhOx/PpaEmgbx30vzDJuTt3OibRED078gS+sX90CpHo3fU2X01y6n5/YiQIgB/onN7oMsDQaexMSgImcXFCh9LOUVgSsg2ZgnBmJDl1x6skBmBukk53nsQEbETiXjZiZyQ5QZQcL5C4iCUKGkYwMWvE6vPZHzsFFY9sRUk6o/Ikn5VReRKvSsKFJM0qdFNJmCoJVyXhqiRclYSrknCtl2Sz3+/v1kCyv2/b9mlfnmTTGt2VJtncW5KnAigRiQMBlLIkm7bXncsUSkUVBHykS8gmT3AVkRYVuSQPQWdhI5K1kLZ6qcDlzGEScM4jYXwE9zz3JKEWIUGTaIBoH3XgHiQRCuwLC/wrYCElGBsNLiX0oaSQSChxi08om6RySKKgsGyoFYV1sKFhkkeNEBp5nHuwHnVpFtSRhOZEY3JghdYFbVZhwieJhDJw15Ae8oWM7Z3aBCAMzsOzLyMdCeweekcagMbZpDF5tNlsQHnQiEQoU0fZDRdJ7ltjFDJJHygBiTRxkpC4PNp8jaS34xWSlu5ctwGJjEhCm5CfIHCoN1j2XdtE48sZEk+vckjAKGSS9unQx4lQpmGh3C5ToFIOrmAv+FK0Ii2JTSppLWeMo0wd4x05QtJak3iSESUhN1LO7lSTrozZJJuExt4MkmCMtqX5eHuRhHlnMQ1HbGGS4CguSJKMbGVJwtG+tE38N2Aw2i9OEp8VHEqSRGdKKyJZGGTwjHpxkwxdZSzvnOTK68X7ZnHnJCRbezV6WN4k6XXx9gWu0B9KgLB7BQej5UH4/ZPtoYhF1nwnp5wqCVcl4aokXJWEq5JwVRKuSsJVSbgqCde/RiJUjsIaWRWiKpkkOU8zvA9rvMl6ACKskkny7nqZ5ltEklEhrlJJKsksJMOTBkMk6YxBkFqWRKSzKCVJYk1GIhTN1Aqaag0HyTESnJVVZop2OhKcz5P93GAeSVhnUhI3SxkF46hNlJ32o5ncGUiioBkhEa5O8jOFvyVRAUmWTYQI6SeMWDNhr8xE7FUScqHxzrQR2wz+cGLx0X5gkvV//t6pJI4k53nbmCTr8dlXkKzm3H4JVRKuSsJVSbgqCVcl4aokXJWE62ZN/3Uk86Rmdsk/87LZI8Zh414AAAAASUVORK5CYII="
            alt=""
            style={{
              position: 'fixed',
              top: `${position.y - 100}px`,
              left: `${position.x - 130}px`,
              boxShadow: 'var(--hover-shadow)'
            }}
            onClick={() => audio.play()}
          />
          <span>Type{' '}
            <kbd>r</kbd>
            <kbd>e</kbd>
            <kbd>s</kbd>
            <kbd>e</kbd>
            <kbd>t</kbd>
          </span>
        </div>
      )}
    </>
  );
};

export default EasterEggs;
