import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 100vh;
  }

  .page-heading {
    position: absolute;
    top: 10px;
    left: 4%;
    opacity: 0.2;
    font-size: 35px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const ConfirmBoxCard = styled.div`
  width: 55%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: 0.3s;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 85%;
    height: 90%;
    margin-top: 10%;
  }

  .card-header {
    text-align: right;
    height: 30px;
    padding: 12px 20px;
    font-size: 26px;
    color: #939191;
    width: 100%;
    margin-bottom-20px;

    span {
      cursor: pointer;
    }
  }

  .card-body {
    display: flex;
    padding: 2%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .logo-section {
      width: 15%;
      padding: 2%;
    }
    .info-section {
      width: 85%;
      padding: 2%;
      @media (max-width: 768px) {
        padding: 2% 5%;
        width: 100%;
      }

      .info-title {
        font-size: 2.3rem;
        font-weight: 700;
        @media (max-width: 768px) {
          font-size: 1.4rem;
          font-weight: 700;
        }
      }

      .info-description {
        font-size: 1.2rem;
        line-height: 1.1;
        display: block;
        margin-bottom: 40px;
        margin-top: 25px;
        color: #9b9b9b;

        @media (max-width: 768px) {
          font-size: 1rem;
          line-height: inherit;
        }

        &.dark {
          font-weight: 600;
          color: #000;
        }
      }

    }
  }
  .card-footer {
    display: flex;
    flex-direction: row;
    width: 75%;
    margin-bottom: 48px;
    justify-content: space-evenly;
    margin-left: 13%;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 2% 5%;
    }
  }

`;

export const ActionButton = styled.a`
  padding: 15px;
  text-align: center;

  &.primary-button {
    background: #286ef1;
    color: #fff;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
  }
  &.secondary-button {
    background: transparent;
    color: #286ef1;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
`;
