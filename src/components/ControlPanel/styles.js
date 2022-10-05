import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const Button = styled.button`
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 1000;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.backgroundColor};
  border: none;
  &:hover {
    opacity: 0.8;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
