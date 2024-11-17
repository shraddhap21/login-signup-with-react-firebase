import Login from "./Login"
import SignUpForm from "./SignUpForm"
import {BrowserRouter, Route,Routes } from "react-router-dom"

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUpForm/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
