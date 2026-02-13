import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import { useDispatch } from 'react-redux'
import { fetchRolesIfNeeded } from './store/thunks/clientThunks'


function App() {
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(fetchRolesIfNeeded());
 },[dispatch]);

  return (
    <>
      <Header/>
      <PageContent/>
      <Footer/>
    </>
  )
}

export default App
