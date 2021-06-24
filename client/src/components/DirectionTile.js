import React from "react"

const DirectionTile = props => {

  let selectedStatusClassName = ""

  if (props.selectedId === props.id){
    selectedStatusClassName = "selected"
  }

  return(
    <li 
      onClick={props.setSelectedDirectionClosure} 
      className={selectedStatusClassName}
    >
      {props.step}
    </li>
  )
}

export default DirectionTile
