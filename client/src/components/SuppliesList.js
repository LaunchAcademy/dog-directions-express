import React, { useState, useEffect } from 'react'

import SupplyTile from "./SupplyTile"

const SuppliesList = (props) => {
  // console.log(props.suppliesData)

  const supplyComponents = props.suppliesData.map((supply) => {
    // console.log(supply);
    return (
      <SupplyTile 
        key={supply.id}
        item={supply.item}
      />
    )
  })

  return (
    <div>
      <h3>Supplies</h3>
      {supplyComponents}
    </div>
  )
}

export default SuppliesList
