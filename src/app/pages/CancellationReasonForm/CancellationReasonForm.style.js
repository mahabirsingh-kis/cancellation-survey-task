import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 80px;
  padding: 9px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
  margin-top: 50px;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ReasonFormCard = styled.div`
  width: 70%;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: 0.3s;
  border-radius: 12px;
  margin-top: 45px;

  @media (max-width: 768px) {
    width: 90%;
  }

  .card-header {
    padding: 20px 20px 12px;
    font-size: 20px;
    color: #939191;
    width: 100%;
    text-align: center;

    .card-header-title {
      color: #000;
      font-weight: 700;
    }
    .card-header-subtitle {
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
      .card-header-subtitle {
        font-size: 14px;
      }
    }
  }

  .card-body {
    display: flex;
    padding: 2%;
    flex-direction: column;
    padding: 2% 14%;

    @media (max-width: 768px) {
      padding: 0% 6%;
    }

    .textarea-field {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 10px;
    }

    .bugs-type-container {
      display: flex;
      flex-direction: column;

      .bug-control {
        margin-bottom: 20px;
      }

      label {
        font-size: 17px;
        font-weight: 700;
        padding: 8px 0px;

        span {
          margin-right: 10px;
        }
      }

      .select-product-control {
        height: 48px;
        border: 1px solid #ccc;
        border-radius: 10px;
      }
    }
  }

  .warning-info-container {
    background: #feecec;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: 600;
    color: #000;
    border-radius: 10px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;

    svg {
      margin-top: 5px;
      margin-right: 10px;
    }
  }
`;

export const ActionButton = styled.a`
  border: 2px solid #ccc;
  width: 30px;
  padding: 5px;
  display: flex;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const RadioButtonComponent = styled.div`
  margin: 24px 0;
  display: flex;
  cursor: pointer;
  user-select: none;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 22px 10px;
  display: flex;
  align-items: center;

  &.selected-option {
    background-color: #d5e3fe;
  }

  .radio-outer-circle {
    width: 25px;
    height: 25px;
    min-width: 25px;
    min-height: 25px;
    border: 2px solid #0d5bc6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    transition: all 0.1s linear;
    background-color: #0d5bc6;
  }

  .radio-inner-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.1s linear;
  }
  .unselected {
    border: 2px solid #666;
    background: #fff;
  }
  .unselected-circle {
    width: 0;
    height: 0;
  }
  .helper-text {
    color: #000;
    padding-right: 8px;
    font-weight: 500;
  }

  .product-select {
    div {
      height: 55px;
    }
  }
`;
export const BoxRadioButtonOption = styled.div`
  margin: 24px 0;
  display: flex;
  cursor: pointer;
  user-select: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 22px 10px;
  display: flex;
  align-items: center;

  &.selected-option {
    background-color: #d5e3fe;
    color: #286ef1;
  }
  .helper-text {
    color: #000;
    padding-right: 8px;
    font-weight: 500;
  }
`;
