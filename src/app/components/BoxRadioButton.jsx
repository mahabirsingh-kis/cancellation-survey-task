import React from 'react';
import { RadioButtonComponent } from '../pages/CancellationReasonForm/CancellationReasonForm.style';

const BoxRadioButton = (props) => {
  const { selected, onChange, text, value } = props;

  return (
    <>
      <RadioButtonComponent
        className={` ${value === selected && 'selected-option'}`}
        onClick={() => {
          onChange(value);
        }}
      >
        <div className="helper-text">{text}</div>
      </RadioButtonComponent>
    </>
  );
};

export default BoxRadioButton;
