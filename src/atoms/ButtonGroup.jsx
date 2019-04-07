import React from 'react'
import "./ButtonGroup.scss"

const ButtonGroup = (props) => {
  return (
	<div className="btn-group">
		{props.children}
	</div>
  )
}

export default ButtonGroup;