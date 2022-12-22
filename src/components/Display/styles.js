import styled from 'styled-components'

export const DisplayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  padding: 5px;
  overflow: auto;
  
  }
`

export const DisplayExpression = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  text-align: right;
`
export const DisplayRes = styled.div`
  text-align: right;
  font-size: 16;
  color: black;
`
