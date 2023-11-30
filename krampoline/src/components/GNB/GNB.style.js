import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 36rem;
  border: 1px solid;
`;

const getButtonColor = (nowPage) => (nowPage ? "black" : "gray");

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 100%;
  padding: 2rem;

  color: ${({ $nowPage }) => getButtonColor($nowPage)};
  &:hover {
    background-color: gray;
  }
`;
