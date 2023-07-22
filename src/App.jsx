import { Outlet } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"


function App() {

  return (
    <div className="container mx-auto px-10">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
