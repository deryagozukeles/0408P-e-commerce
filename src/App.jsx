import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import { useDispatch } from 'react-redux'
import { fetchRolesIfNeeded } from './store/thunks/clientThunks'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(fetchRolesIfNeeded());
 },[dispatch]);

  return (
    <>
     <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header/>
      <PageContent/>
      <Footer/>
    </>
  )
}

export default App
