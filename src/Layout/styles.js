import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  min-height: 95vh;
  min-width: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
`
