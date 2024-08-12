import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Update from "./Update"

function App() {

  return (
    // <div className="w-screen h-screen flex flex-col items-center">
    <BrowserRouter>
      <Routes>=
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
    // </div>
  )
}

export default App
