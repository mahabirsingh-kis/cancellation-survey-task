import React, { useState } from 'react';
import { MainContainer, ReasonFormCard } from './CancellationReasonForm.style';
import HeaderComponent from '../../components/HeaderComponent';
import RadioOption from '../../components/RadioOption';
import BoxRadioButton from '../../components/BoxRadioButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import ReactSelect, { components } from 'react-select';

const SelectOptions = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const CancellationReasonForm = () => {
  const [resaonsList] = useState([
    { value: 1, label: "I didn't realize it was a recurring membership" },
    { value: 2, label: 'Found a better solution' },
    { value: 3, label: "It's too expensive" },
    { value: 4, label: 'Bug, things not working properly' },
    { value: 5, label: ' I just want to pay for a single pluging ' },
    { value: 6, label: ' Not Using WordPress anymore ' },
    { value: 7, label: ' Other' },
  ]);

  const [productsList] = useState([
    { value: 1, label: 'Product#1' },
    { value: 2, label: 'Product#2' },
    { value: 3, label: 'Product#3' },
  ]);

  const [bugTypeOptions] = useState([
    { value: 1, label: 'One Major Problem' },
    { value: 2, label: 'Various Things' },
  ]);

  const [selectedReason, setSelectedReason] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBugType, setSelectedBugType] = useState(1);

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <MainContainer>
        <HeaderComponent path={'/'} />
        <ReasonFormCard>
          <div className="card-header">
            <h2 className="card-header-title">We're sad to see you go...</h2>
            <p className="card-header-subtitle">
              Can you tell us why you want ot cancel the membership?
            </p>
          </div>
          <div className="card-body">
            {resaonsList.map((reason) => (
              <>
                <RadioOption
                  value={reason.value}
                  selected={selectedReason}
                  text={reason.label}
                  onChange={setSelectedReason}
                />
                {selectedReason == 2 && reason.value == 2 && (
                  <div>
                    <textarea
                      rows={4}
                      className="textarea-field"
                      placeholder="What is better solution? if you don't mind sharing. yourfeedback is much appriciated"
                    ></textarea>
                  </div>
                )}
                {selectedReason == 4 && reason.value == 4 && (
                  <div className="bugs-type-container">
                    <div className="bug-control">
                      <label>
                        <span>Which product(s) did you have an issue with</span>
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </label>
                      <ReactSelect
                        options={productsList}
                        isMulti
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                          SelectOptions,
                        }}
                        onChange={handleProductChange}
                        allowSelectAll={true}
                        value={selectedProduct}
                      />
                    </div>
                    {selectedProduct && (
                      <div className="bug-control">
                        <label>
                          <span>What was it?</span>
                        </label>
                        <div style={{ display: 'flex' }}>
                          {bugTypeOptions.map((type) => (
                            <BoxRadioButton
                              value={type.value}
                              selected={selectedBugType}
                              text={type.label}
                              onChange={setSelectedBugType}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="bug-control">
                      <label>
                        <span>What problem(s) did you encounter?</span>
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </label>
                      <textarea
                        rows={4}
                        className="textarea-field"
                        placeholder="What is better solution? if you don't mind sharing. yourfeedback is much appriciated"
                      ></textarea>
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className="warning-info-container">
              <FontAwesomeIcon icon={faCircleInfo} color={'red'} />
              <p>
                {' '}
                Are you absolutely sure you want to cancel? If you do you'll lose access to so many
                cool things. And you will loose the chance to stay in this plan (regardless of
                future)
              </p>
            </div>
          </div>
        </ReasonFormCard>
      </MainContainer>
    </>
  );
};

export default CancellationReasonForm;
