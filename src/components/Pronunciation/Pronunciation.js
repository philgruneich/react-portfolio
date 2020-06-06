import React, { useRef, useContext } from 'react';
import { HighContrastContext } from '~/store/HighContrastStore';
import {
  PronunciationButton,
  PronunciationSvg,
  PronunciationPath
} from './Pronunciation.styles';

export const Pronunciation = ({ src }) => {
  const contrastContext = useContext(HighContrastContext);
  const audioRef = useRef();

  const onClickHandler = event => {
    event.preventDefault();

    audioRef.current.play();
  };

  return (
    <PronunciationButton onClick={onClickHandler} aria-label="Play sound">
      <audio ref={audioRef} src={src} crossOrigin="anonymous" type="audio/mp3" />
      <PronunciationSvg>
        <PronunciationPath hasHighContrast={contrastContext.state} />
      </PronunciationSvg>
    </PronunciationButton>
  )
}
