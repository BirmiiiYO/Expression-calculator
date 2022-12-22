import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  min-width: 90vw;
  padding: 40px;
`

const Title = styled.p`
  font-size: 26px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`

const MySelect = styled.select`
  border-radius: 3px;
  cursor: pointer;
  font-size: 25px;
  margin: 10px 0;
  padding: 5px;
  width: 160px;
`
const ClearButton = styled.button`
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  font-size: 25px;
  padding: 5px;
  width: 160px;
`
export { ClearButton, Container, MySelect, Title }
