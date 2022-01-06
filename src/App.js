import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componets/NavBar';
import From from './componets/From';
import ListOfCards from './componets/ListOfCards';
function App() {
  return (
    <div>
      <NavBar/>
      <From/>
      <ListOfCards/>    
    </div>

  )
}

export default App
