import styled from 'styled-components'

const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: block;
  font-size: 10px;
  height: 50px;
  justify-self: center;
  transition: 0.3s all ease;
  width: 50px;
  &:hover {
    opacity: 0.1;
    transform: scale(1.1});
  }
`

export default ButtonContainer
