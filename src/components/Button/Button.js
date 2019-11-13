import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <h1>{props.testProps}</h1>
  )
}

Button.propTypes = {
  testProps: PropTypes.string
}
Button.defaultProps = {
  testProps: 'Pass Some test Props'
}

export default Button
