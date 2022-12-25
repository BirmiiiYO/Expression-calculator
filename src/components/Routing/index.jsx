import { PAGE_ROUTES } from '@constants/routes'
import { ClassCalc } from '@pages/Class'
import { FuncCalc } from '@pages/Func'
import { Settings } from '@pages/Settings'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export function Routing() {
  return (
    <Routes>
      <Route
        path={PAGE_ROUTES.FUNCTION_CALC}
        element={<FuncCalc />}
      />
      <Route
        path={PAGE_ROUTES.CLASS_CALC}
        element={<ClassCalc />}
      />
      <Route
        path={PAGE_ROUTES.SETTINGS}
        element={<Settings />}
      />
      <Route
        path={PAGE_ROUTES.NOT_FOUND}
        element={<Navigate replace to="/fc" />}
      />
    </Routes>
  )
}
