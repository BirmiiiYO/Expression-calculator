import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Button'
import { numberButtons } from '../../constants/numbers'

import { Grid } from './styles'

export const Keypad = ({ handleClick }) => {
  return (
    <Grid>
      {numberButtons.map(({ id, context }) => {
        return (
          <Button
            key={id}
            value={context}
            onClick={handleClick}
          />
        )
      })}
    </Grid>
  )
}

Keypad.propTypes = {
  handleClick: PropTypes.func,
}
