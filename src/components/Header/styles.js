import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: ${(props) => props.theme.colors.text};
`;
export const Row = styled.ul`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
`;
export const Element = styled.li`
  list-style-type: none;
  color: ${(props) => props.theme.colors.backgroundColor};
`;
export const CustomLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  margin: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
