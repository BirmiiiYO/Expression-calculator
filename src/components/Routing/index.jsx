import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Settings } from '../../pages/Settings'
import { FuncCalc } from '../../pages/Func'
import { ClassCalc } from '../../pages/Class'

export function Routing() {
  return (
    <Routes>
      {/* <Route path="/fc" element={<FuncCalc />} /> */}
      <Route path="/cc" element={<ClassCalc />} />
      <Route path="/settings" element={<Settings />} />
      <Route
        path="/"
        element={<Navigate replace to="/fc" />}
      />
    </Routes>
  )
}
