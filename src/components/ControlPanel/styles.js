import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`
export const Button = styled.button`
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 1000;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.header};
  border: none;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 7px;
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
