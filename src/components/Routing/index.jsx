/* eslint-disable import/no-cycle */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import ClassCalc from '../../pages/Class'
import FuncCalc from '../../pages/Func'
import Settings from '../../pages/Settings'

export default function Routing() {
  return (
    <Routes>
      <Route path="/fc" element={<FuncCalc />} />
      <Route path="/cc" element={<ClassCalc />} />
      <Route path="/settings" element={<Settings />} />
      <Route
        path="/"
        element={<Navigate replace to="/fc" />}
      />
    </Routes>
  )
}
