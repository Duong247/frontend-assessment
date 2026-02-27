import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import SectionsAccordion from './components/SectionsAccordion'
import SectionsTabs from './components/SectionsTabs'

function App() {
  const [screenWidth,setScreenWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleScreenResize = ()=>{
      setScreenWidth(window.innerWidth)
      // console.log(screenWidth)
    }
    // console.log(screenWidth)
    window.addEventListener("resize",handleScreenResize)
  },[])

  return (
    <>
      <Header/>
      <div className="container">
        {
          screenWidth>768? 
          <SectionsTabs/>:
          <SectionsAccordion/>
        }
      </div>
    </>
  )
}

export default App



