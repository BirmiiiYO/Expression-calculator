import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.header};
  border: 1px solid;
  border-radius: 7px;
  display: flex;
  height: 570px;
  margin-top: 20px;
  max-width: 1000px;
  padding: 20px;
`
const Left = styled.div`
  height: 100%;
  max-width: 800px;
  padding: 10px;
  width: 100%;
`

const Right = styled.div`
  max-width: 200px;
  padding: 10px;
  width: 100%;
`
const Button = styled.button`
  background: none;
  border: none;
  margin: 5px;
`

export { Button, Container, Left, Right }
