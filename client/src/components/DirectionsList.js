import React, { useState, useEffect } from 'react'

import DirectionTile from "./DirectionTile"

const DirectionsList = (props) => {

  const [selectedId, setSelectedId] = useState(null)

  const directionTiles = props.directions.map(direction => {

    const setSelectedDirectionClosure = () => {
      setSelectedId(direction.id)
    }

    return (
      <DirectionTile
        step={direction.step}
        key={direction.id}
        id={direction.id}
        selectedId={selectedId}
        setSelectedDirectionClosure={setSelectedDirectionClosure}
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