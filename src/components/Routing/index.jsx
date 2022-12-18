import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import {
  FuncCalc,
  History,
  Main,
  Settings,
} from '../../pages'
import { ClassCalc } from '../../pages/Class'

export function Routing() {
  return (
    <Routes>
      <Route path="/fc" element={<FuncCalc />} />
      <Route path="/cc" element={<ClassCalc />} />
      <Route path="/settings" element={<Settings />} />
      <Route
        path="*"
        element={<Navigate replace to="/fc" />}
      />
    </Routes>
  )
}
