import React from 'react'
import Navbar from './Components/Navbar.jsx';
import HomePage from './Components/HomePage.jsx';
import { Route, Routes } from "react-router";
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import Settings from './Components/Settings.jsx';
import Profile from './Components/Profile.jsx';
import { userAuthStore} from './Store/useAuthStore.js';
import {useEffect} from "react";
import {Loader} from "lucide-react";
import {Navigate} from "react-router";
import {Toaster} from "react-hot-toast";

const App = () => {
  const {authUser,checkAuth,isCheckingAuth}=userAuthStore();

  useEffect(()=>{
    checkAuth();


  },[checkAuth]);

  if(isCheckingAuth && !authUser) return(

    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"></Loader>

    </div>


  )


  


  return (
    <div className="">
     
      <Navbar />
      
      <Routes>
        < Route path="/" element={authUser ? <HomePage/>:<Navigate to="/login"/>}/>
         < Route path="/signup" element={!authUser ? <Signup/>:<Navigate to="/"/>}/>
          < Route path="/login" element={!authUser ? <Login/>:<Navigate to="/"/>}/>
           < Route path="/settings" element={<Settings/>}/>
            < Route path="/profile" element={authUser ?<Profile/>:<Navigate to="/login"/>}/>

        


      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
     

      
    </div>
  )
}

export default App
