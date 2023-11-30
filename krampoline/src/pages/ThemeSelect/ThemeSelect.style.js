import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  display: flex;
  width: 100%;
  padding: 1rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThemeContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const Theme = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 11rem;
  height: 11rem;
  justify-content: center;
  background-color: gray;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const GNBContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
`;
