import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;

    width: 100%;
    max-height: 26vw;
    overflow: hidden;
    display: block;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
    border-radius: 4px;

    &:hover {
      opacity: 0.7;
    }

    .icon-add {
      padding: 50px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 4px;
      border: none;
      background: rgba(0, 0, 0, 0.4);
      margin-bottom: 20px;
    }

    input {
      display: none;
    }
  }
`;
