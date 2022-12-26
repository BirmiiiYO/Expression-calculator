import styled from 'styled-components'
import * as consts from '@styles/consts'

const Container = styled.div`
  background-color: ${({ theme }) => theme.header};
  border: 1px solid;
  border-radius: ${consts.BORDER_RADIUS.M}px;
  display: flex;
  height: 500px;
  margin-top: ${consts.RANGE.M}px;
  max-width: 900px;
  padding: ${consts.RANGE.M}px;
`
const Left = styled.div`
  height: 100%;
  max-width: 800px;
  padding: ${consts.RANGE.M}px;
  width: 100%;
`

const Right = styled.div`
  max-width: 200px;
  padding: ${consts.RANGE.S}px;
  width: 100%;
`
const Button = styled.button`
  background: none;
  border: none;
  margin: ${consts.RANGE.XS}px;
`
export { Button, Container, Left, Right }
