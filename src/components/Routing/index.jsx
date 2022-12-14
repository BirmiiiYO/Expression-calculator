import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import {
  FuncCalc,
  History,
  Main,
  Settings,
} from '../../pages'
import { ClassCalc } from '../../pages/Class'

export function Routing({
  history,
  setHistory,
  addToHistory,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <FuncCalc
            setHistory={setHistory}
            addToHistory={addToHistory}
          />
        }
      />
      <Route
        path="/cc"
        element={
          <ClassCalc
            setHistory={setHistory}
            addToHistory={addToHistory}
          />
        }
      />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

Routing.propTypes = {
  history: PropTypes.array.isRequired,
  setHistory: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
}
