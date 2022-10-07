import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const Row = styled.ul`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 140px;
  @media (max-width: 500px) {
    display: flex;
    font-size: 15px;
    align-items: center;
    justify-content: space-between;
    flex-diraction: column;
  }
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
