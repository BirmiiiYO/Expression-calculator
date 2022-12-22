import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 26px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`

export const Item = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  margin-top: 20px;
`
