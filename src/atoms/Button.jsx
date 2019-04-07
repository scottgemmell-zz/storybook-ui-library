import React from 'react'

const Button = ( config ) => {
  return (
	<button className={`btn btn--${config.modifier}`}>
	  {config.txt}
	</button>
  )
}

export default Button;