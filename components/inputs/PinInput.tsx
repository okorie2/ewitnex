/** @jsxImportSource @emotion/react */

import React, { useRef } from 'react';

interface PinInputGridProps {
  pin: Array<number | undefined>;
  onPinChanged: (pinEntry: number | undefined, index: number) => void;
  pinLength: number;
}

const MIN_VALUE = 0;
const MAX_VALUE = 9;
const BACK_SPACE = 'Backspace';

const PinInputGrid: React.FC<PinInputGridProps> = ({
  pinLength,
  pin,
  onPinChanged,
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const changePinFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex];
    if (ref) {
      ref.focus();
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;
    const pinNumber = Number(value.trim());
    if (isNaN(pinNumber) || value.length === 0) {
      return;
    }
    if (pinNumber >= MIN_VALUE && pinNumber <= MAX_VALUE) {
      onPinChanged(pinNumber, index);
      if (index < pinLength - 1) {
        changePinFocus(index + 1);
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const keyBoardCode = event.nativeEvent.code;
    if (keyBoardCode !== BACK_SPACE) {
      return;
    }
    if (pin[index] === undefined) {
      changePinFocus(index - 1);
    } else {
      onPinChanged(undefined, index);
    }
  };

  return (
    <div>
      {Array.from({ length: pinLength }, (_, index) => (
        <input
          id='pin'
          key={index}
          autoComplete='off'
          css={{
            width: '35px',
            height: '40px',
            margin: '1rem 0.8rem 1rem 0',
            textAlign: 'center',
            border: '1px solid #AEAEAE',
            borderRadius: '8px',
            fontFamily: "'Nunito',sans-serif",
            fontSize: '1rem',
          }}
          maxLength={1}
          ref={(el) => {
            if (el) {
              inputRefs.current[index] = el;
            }
          }}
          onChange={(event) => handleChange(event, index)}
          value={pin[index]}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  );
};

export default PinInputGrid;
