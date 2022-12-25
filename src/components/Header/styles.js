import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 30px;
  font-style: italic;
`

const CustomLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin: 10px;
  &:hover {
    transform: scale(1.2);
  }
`

const Links = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 350px;
`
export { CustomLink, HeaderContainer, Link, Links, Title }
