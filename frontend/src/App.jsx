import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"
import NotificationPage from "./pages/NotificationsPage.jsx"
import { Toaster } from "react-hot-toast"
import { PageLoader } from './components/PageLoader.jsx'
import useAuthUser from './hook/useAuthUser.js'
import  Layout  from './components/Layout.jsx'
import { useThemeStore } from './store/useThemeStore.js'


const App = () => {
  
  
  const {theme} = useThemeStore();
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded

  if (isLoading) return <PageLoader />


  return (
    <div data-theme={theme}>
 
      <Routes>
        
        <Route path="/" element={isAuthenticated && isOnboarded ? (<Layout showSidebar={true} ><HomePage /></Layout>) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)} />

        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to={!isOnboarded ? "/onboarding" : "/"} />} />

        <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to={!isOnboarded ? "/onboarding" : "/"} />} />

        <Route path="/chat/:id" element={isAuthenticated && isOnboarded ? ( <Layout showSidebar={false}> <ChatPage /> </Layout>) : ( <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} /> )} />

        <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />} />

        <Route path="/onboarding" element={isAuthenticated ? <OnboardingPage /> : <Navigate to="/login" />} />

        <Route path="/notifications" element={isAuthenticated && isOnboarded ? (<Layout showSidebar={true}><NotificationPage /></Layout> ) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />) } />


      </Routes>
      <Toaster />


    </div>
  )
}

export default App