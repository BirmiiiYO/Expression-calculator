import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.p`
  font-size: 26px;
  margin: 5px auto;
`

export const MySelect = styled.select`
  font-size: 25px;
  border: 2px solid lightgray;
  border-radius: 3px;
  padding: 5px;
  background-color: #ededed;
  color: #2d2d2d;
  cursor: pointer;
  transition: border 0.3s;
  &:hover {
    border: 2px solid gray;
  }
`

export const OptionSelect = styled.option`
  cursor: pointer !important;
`
