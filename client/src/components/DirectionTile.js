import React from "react"

const DirectionTile = props => {
  // const something = () => {
  //   console.log("I was clicked");
  //   // set state with the id of this direction
  //   props.setSelectedId(props.id)
  // }

  // let selectedColor = ""
  // if (props.id === props.selectedId) {
  //   selectedColor = "selected"
  // }
  
  // <li className={selectedColor} onClick={something}>{props.step}</li>
  return (
    <li 
      onClick={props.setSelectedDirectionClosure}
      className={props.selectedColorClass}
    >
      {props.step}
    </li>
  )
}

export default DirectionTile
