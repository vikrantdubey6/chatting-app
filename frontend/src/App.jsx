import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"
import NotificationPage from "./pages/NotificationsPage.jsx"
import toast, {Toaster} from "react-hot-toast"


const App = () => {
  return (
    <div data-theme= "cupcake">

      <button onClick={() => toast.error("Hello World")} >toast check</button>

      <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>}  />
        <Route path="/chat" element={<ChatPage/>}  />
        <Route path="/call" element={<CallPage/>}  />
        <Route path="/onboarding" element={<OnboardingPage/>}  />
        <Route path="/notification" element={<NotificationPage/>}  />
      </Routes>
      <Toaster/>
  

    </div>
  )
}

export default App