import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActionButton, HeaderContainer } from '../pages/CancellationReasonForm/CancellationReasonForm.style';

const HeaderComponent = (props) => {
  return (
    <>
      <HeaderContainer>
        <Link to={props.path}>
          <ActionButton className="nav-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </ActionButton>
        </Link>
        <h1>Cancellation Survey</h1>
      </HeaderContainer>
    </>
  );
};

export default HeaderComponent;
