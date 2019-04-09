import React from 'react'

const Panel = ( { children } ) => {
  return (
	<div 
		style={{ 
			backgroundColor: "#bada55",
			borderColor: "#bada55",
			padding: "10px 16px",
			fontSize: 16,
			margin: 20
		}}
	>
	  {children}
	</div>
  )
}

export default Panel;