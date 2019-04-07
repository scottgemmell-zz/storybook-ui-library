import React from 'react'
import "./Button.scss"

const Button = ( config ) => {
  return (
	<button className={`btn btn--${config.modifier}`}>
	  {config.children}
	</button>
  )
}

export default Button;