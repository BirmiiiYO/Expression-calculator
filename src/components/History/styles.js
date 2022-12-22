import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export const List = styled.ul.attrs(() => ({
  type: 'list',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 26px;
  margin-bottom: 10px;
`

export const Item = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  padding: 5px 10px;
`
