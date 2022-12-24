import PropTypes from 'prop-types'
import React from 'react'

import { LayoutWrapper } from './styles'

export function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
