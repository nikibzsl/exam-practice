import React, { useEffect, useState } from "react"

const App = () => {

  const [characters, setCharacters] = useState(null);

  //kezdeti érték egy üres objektum.

  useEffect(function() {
    fetch('https://demoapi.com/api/series/howimetyourmother')
    .then(response => response.json)
    .then((data) => {
      setCharacters(data) //bejön az adat, eltároljuk a state-ben
    })
  })


  return (
    <div>
      <h1>Series Api</h1>
      {characters ? characters.map((character) => <Character name={character.name}/> ) : <LoadingMask />}
    </div>
  )
}

export default App
