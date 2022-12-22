import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`
const Button = styled.button`
  background-color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.header};
  cursor: pointer;
  font-weight: 1000;
  height: 70px;
  margin: 10px;
  width: 70px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 7px;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export { Button, Container, Row }
