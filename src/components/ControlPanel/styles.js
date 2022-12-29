import styled from 'styled-components'
import * as consts from '@styles/themes'

const Container = styled.div`
  ${consts.CENTER}
  flex-direction: column;

  margin-top: ${consts.RANGE.M}px;
`
const Button = styled.button`
  background-color: ${({ theme }) => theme.text};
  border: none;
  border-radius: ${consts.BORDER_RADIUS.L}px;
  color: ${({ theme }) => theme.header};
  cursor: pointer;
  font-weight: ${consts.FONT_WEIGHT.XL};
  height: 70px;
  margin: ${consts.RANGE.S}px;
  width: 70px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 7px;
  }
  @media (max-width: 424px) {
    width: 35px;
    height: 35px;
    margin: 5px;
  }
`
const Row = styled.div`
  ${consts.CENTER}
`

export { Button, Container, Row }
