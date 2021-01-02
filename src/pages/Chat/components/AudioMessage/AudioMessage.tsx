import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import './style.scss';
import icons from '../../../../resourse/icons';

const AudioMessage = () => {
  const [audio] = useState<HTMLAudioElement>(new Audio());
  const [play, setPlay] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');
  const [widthContainer, setWidthContainer] = useState<string>('0%');
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const handleClick = () => {
    setPlay(!play);
    if (!audio.src) {
      audio.preload = 'metadata';
      audio.src =
        'https://cdn3.sefon.pro/files/prev/1/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%20%D0%A8%D1%83%D1%84%D1%83%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20-%203-%D0%B5%20%D0%A1%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8F%20%28192kbps%29.mp3';
      return;
    }
    if (!play) {
      // eslint-disable-next-line no-void
      void audio.play();
    } else {
      audio.pause();
    }
  };
  const handleLoadeddata = () => {
    console.log(audio.duration);
    // setTime(moment.utc(audio.duration * 1000).format('mm:ss'));
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    audio.play();
  };
  const handleTimeUpdate = () => {
    const pos = audio.currentTime / audio.duration;
    setWidthContainer(`${(pos * 100).toFixed(2)}%`);
  };
  useEffect(() => {
    audio.addEventListener('loadeddata', handleLoadeddata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    // setWidthContainer(ref.current?.offsetWidth);
    return () => {
      audio.removeEventListener('loadeddata', handleLoadeddata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);
  return (
    <section ref={ref} className="audioMessageWrapper">
      <div className="audioMessageContent">
        <button
          type="button"
          onClick={handleClick}
          className="audioMessageButton"
        >
          {!play && icons.play}
          {play && icons.pause}
        </button>
        {icons.player}
        <span className="audioMessageTime">{time}</span>
      </div>
      <div style={{ width: widthContainer }} className="audioMessageSeekbar" />
    </section>
  );
};

export default AudioMessage;
