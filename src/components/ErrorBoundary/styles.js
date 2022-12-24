import styled from 'styled-components'

const ErrorTitle = styled.h1`
  margin-top: 40px;
  padding: $10px;
  ${({ theme }) => theme.colors.text};
  text-align: center;
`

export { ErrorTitle }
