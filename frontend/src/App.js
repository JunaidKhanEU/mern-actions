import { useEffect, useState } from "react"
import axios from "axios"

import "./App.css"

function App() {
  const [username, setUsername] = useState("")

  const getNames = async () => {
    const response = await axios.get("/names")

    return response.data
  }
  useEffect(() => {
    getNames().then((data) => {
      setUsername(data)
    })
  }, [])
  return (
    <div className="App">
      <h1>FrontEnd</h1>
      <h3>{username && username}</h3>
    </div>
  )
}

export default App
