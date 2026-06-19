import Auth from "./components/Auth"
import Login from "./components/Login"
import Settings from "./components/Settings"
import { Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp"


function App() {
  

  return (
    <main>
     <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<SignUp />} />
      <Route path="/settings" element={<Settings />} />
     </Routes>
    </main>
  )
}

export default App
