import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import SupplyList from "./SuppliesList"
import DirectionsList from "./DirectionsList"
import FetchButton from "./FetchButton"

const App = (props) => {
  // debugger
  const directions = props.data.directions
  const supplies = props.data.supplies

  return (
    <>
      <h1>How To {props.data.activity}</h1>

      <SupplyList suppliesData={supplies} />

      <DirectionsList
        directions={directions}
      />

      <FetchButton />
    </>
  )
}

export default hot(App)
