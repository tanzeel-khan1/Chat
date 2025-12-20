import React, { useState } from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Logout from "./home/left1/Logout";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import useConversation from "./stateman/useConversation";

const App = () => {
  const { authUser, setAuthUser } = useAuth();
  const { selectedConversation } = useConversation();
  const [showSidebar, setShowSidebar] = useState(false);

  console.log("Auth User in App.jsx:", authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen overflow-hidden">
                {/* Desktop Layout - All components side by side */}
                <div className="hidden md:flex w-full h-full">
                  <Logout />
                  <Left setShowSidebar={setShowSidebar} />
                  <Right setShowSidebar={setShowSidebar} />
                </div>
                
                {/* Mobile Layout - Toggleable sidebar */}
                <div className="md:hidden w-full h-full relative">
                  {/* Sidebar - Show when no conversation or when toggled */}
                  <div className={`${
                    selectedConversation 
                      ? (showSidebar ? 'block' : 'hidden')
                      : 'block'
                  } fixed inset-0 z-30`}>
                    <Left setShowSidebar={setShowSidebar} />
                  </div>
                  
                  {/* Overlay for mobile when sidebar is open and conversation is selected */}
                  {showSidebar && selectedConversation && (
                    <div 
                      className="fixed inset-0 bg-black bg-opacity-50 z-20"
                      onClick={() => setShowSidebar(false)}
                    />
                  )}
                  
                  {/* Chat Area - Show only when conversation selected */}
                  <div className={`${
                    selectedConversation 
                      ? 'block' 
                      : 'hidden'
                  } fixed inset-0 z-10`}>
                    <Right setShowSidebar={setShowSidebar} />
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />

        <Route path="/signup" element={authUser ? <Navigate to="/" /> :<Signup />} />
      </Routes>
{/* <Loading/> */}
<Toaster />

     
    </>
  );
};

export default App;
