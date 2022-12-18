import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`

export const Title = styled.h1`
  font-size: 30px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
`

export const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    transform: scale(1.2);
  }
`

export const Links = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
