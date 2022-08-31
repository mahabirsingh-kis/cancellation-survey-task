import React from 'react';
import { RadioButtonComponent } from '../pages/CancellationReasonForm/CancellationReasonForm.style';

const RadioOption = (props) => {
  const { selected, onChange, text, value } = props;

  return (
    <>
      <RadioButtonComponent
        className={` ${value === selected && 'selected-option'}`}
        onClick={() => {
          onChange(value);
        }}
      >
        <div className={`radio-outer-circle ${value !== selected && 'unselected'}`}>
          <div className={`radio-inner-circle ${value !== selected && 'unselected-circle'}`} />
        </div>
        <div className="helper-text">{text}</div>
      </RadioButtonComponent>
    </>
  );
};

export default RadioOption;
