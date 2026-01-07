import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"
import NotificationPage from "./pages/NotificationsPage.jsx"
import  { Toaster } from "react-hot-toast"
import { PageLoader } from './components/PageLoader.jsx'
import useAuthUser from './hook/useAuthUser.js'


const App = () => {


  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded

  if (isLoading) return <PageLoader />


  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={isAuthenticated && isOnboarded ?(<HomePage/>) : (<Navigate to= {!isAuthenticated? "/login" : "/onboarding"}/>) } />
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />} />
        <Route path="/onboarding" element={isAuthenticated ? <OnboardingPage /> : <Navigate to="/login" />} />
        <Route path="/notification" element={isAuthenticated ? <NotificationPage /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />


    </div>
  )
}

export default App