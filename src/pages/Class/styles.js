import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  min-height: 500px;
  margin-top: 20px;
  border: 1px solid;
  border-radius: 7px;
  padding: 20px;
  background-color: ${({ theme }) => theme.header};
  display: flex;
`
export const Left = styled.div`
  max-width: 800px;
  padding: 10px;
  width: 100%;
  height: 100%;
`

export const Right = styled.div`
  max-width: 200px;
  width: 100%;
  padding: 10px;
`
export const Button = styled.button`
  background: none;
  border: none;
  margin: 5px;
`
