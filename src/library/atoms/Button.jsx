import React from 'react'

const Button = ( { modifier, onClick, children } ) => {

  return (
	<button 
		className={`btn btn--${modifier}`}
		onClick={onClick}
		style={{ 
			backgroundColor: "#bada55",
			borderColor: "#bada55",
			color: "#fff",
			marginRight: 10,
			padding: "10px 16px",
			fontSize: 16,
			fontWeight: "bold"
		}}
	>
	  {children}
	</button>
  )
}

export default Button;