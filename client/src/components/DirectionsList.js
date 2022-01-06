import React, { useState } from 'react'

import DirectionTile from "./DirectionTile"

const DirectionsList = (props) => {
  const [selectedId, setSelectedId] = useState(null)
  
  const directionTiles = props.directions.map((direction) => {

    const setSelectedDirectionClosure = () => {
      console.log("i was clicked");
      setSelectedId(direction.id)

      // if state was an array - not for core!
      // setSelectedIds([...selectedIds, direction.id])
    }

    let selectedColorClass

    if (selectedId === direction.id) {
      selectedColorClass = "selected"
    }

    // <DirectionTile
    //   key={direction.id}
    //   step={direction.step}
    //   id={direction.id}
    //   setSelectedId={setSelectedId}
    //   selectedId={selectedId}
    // />
    return (
      <DirectionTile
        key={direction.id}
        step={direction.step}
        id={direction.id}
        setSelectedDirectionClosure={setSelectedDirectionClosure}
        selectedColorClass={selectedColorClass}
      />
    )
  })

  return (
    <div>
      <h3>Directions:</h3>
      <ol>{directionTiles}</ol>
    </div>
  )
}

export default DirectionsList
