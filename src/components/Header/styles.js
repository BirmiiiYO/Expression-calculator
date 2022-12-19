import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text};
`

export const Title = styled.h1`
  font-size: 30px;
  font-style: italic;
`

export const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

export const Links = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
