import React from 'react'
import PropTypes from 'prop-types'

import { LayoutWrapper } from './styles'

export const Layout = ({ children }) => (
  <LayoutWrapper>{children}</LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
