import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { Work } from "./components/Work"

function App() {

  return (
    <main className="bg-primary font-Roboto">

      <NavBar />
      <Hero />
      <Work />
      <Contact />
      
    </main>
  )
}

export default App
