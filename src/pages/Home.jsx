import React from 'react'
import NavBar from '../components/NavBar'
import './home.scss'
import { Header } from '../components/Header'

const Home = () => {
  return (
    <div className='home'>
        <NavBar/>
        <Header/>
    </div>
  )
}

export default Home