import React from 'react'
import "./Button.scss"

const Button = ( { modifier, onClick, children } ) => {
  return (
	<button 
		className={`btn btn--${modifier}`}
		onClick={onClick}
	>
	  {children}
	</button>
  )
}

export default Button;