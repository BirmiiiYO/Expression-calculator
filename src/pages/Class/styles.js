import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.header};
  border: 1px solid;
  border-radius: 7px;
  display: flex;
  margin-top: 20px;
  max-width: 1000px;
  min-height: 500px;
  padding: 20px;
`
export const Left = styled.div`
  height: 100%;
  max-width: 800px;
  padding: 10px;
  width: 100%;
`

export const Right = styled.div`
  max-width: 200px;
  padding: 10px;
  width: 100%;
`
export const Button = styled.button`
  background: none;
  border: none;
  margin: 5px;
`
