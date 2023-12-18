import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CocktailDetails } from './components/CocktailDetails'

function App() {
  const [count, setCount] = useState(0)

  return <CocktailDetails/>
}

export default App
