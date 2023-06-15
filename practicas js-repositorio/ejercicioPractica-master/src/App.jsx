// import { useState } from 'react'

import Card from "./containers/card"

function App({children}) {

  return (
    <>
      <Card/>
      {children}
    </>
  )
}

export default App
