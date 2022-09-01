import React from 'react';
import { Link } from 'react-router-dom';
import { MainContainer, ConfirmBoxCard, ActionButton } from './CancellationConfirm.style';

const CancellationConfirm = () => {
  return (
    <>
      <MainContainer>
        <h1 className='page-heading'>My Account</h1>
        <ConfirmBoxCard>
          <div className="card-header">
            <span>x</span>
          </div>
          <div className="card-body">
            <div className="logo-section">
              <img src="assets/icons/logo.png" alt="logo" />
            </div>
            <div className="info-section">
              <h1 className="info-title">Before You Go...</h1>
              <h1 className="info-title">Woul 50% Off For 6 Months Help?</h1>
              <span className="info-description">
                We know things REALLY suck in the world right now - and many businesses and
                freelancers are struggling to stay afloat during this COVID-19 crisis.
              </span>
              <span className="info-description dark">
                So if you could use the extra cushion, grab 50% off for 6 months.
              </span>
              <span className="info-description">We hope you're staying safe and healthy!</span>
            </div>
          </div>
          <div className="card-footer">
            <ActionButton className="primary-button">50 % OFF For 6 Months</ActionButton>
            <Link to={'/cancel-reason'}>
              <ActionButton className="secondary-button">No, thanks! I'll cancel</ActionButton>
            </Link>
          </div>
        </ConfirmBoxCard>
      </MainContainer>
    </>
  );
};

export default CancellationConfirm;
