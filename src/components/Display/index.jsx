import React from 'react'
import { Container } from './styles'

export const Display = () => (
  <Container type="display">{expr || '0'}</Container>
)
