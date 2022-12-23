import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const List = styled.ul.attrs(() => ({
  type: 'list',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 26px;
  margin-bottom: 10px;
`

const Item = styled.li`
  list-style-type: none;
`

const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  padding: 5px 10px;
`

export { Button, Container, Item, List, Title }
