import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px 0 10px;
  min-height: 511px;
`;
export const Ul = styled.ul.attrs(() => ({
  type: 'list'
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 26px;
  color: ${(props) => props.theme.colors.text};
  margin: 20px 0;
`;
export const Button = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  margin-top: 20px;
`;
