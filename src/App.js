
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'

const App =(props)=>{
  const apikey=process.env.React_app_newsapi
  const pagesize = 5;

  const [progress, setprogress]=useState(0)
  
    return (

      <div>
      <BrowserRouter>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={pagesize} country='in' category='general'/>}/>
            <Route exact path='/business' element={<News setprogress={setprogress} apikey={apikey} key="business" pagesize={pagesize} country='in' category='business'/>}/>
            <Route exact path='/entertainment' element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={pagesize} country='in' category='entertainment'/>}/>
            <Route exact path='/general' element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={pagesize} country='in' category='general'/>}/>
            <Route exact path='/health' element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={pagesize} country='in' category='health'/>}/>
            <Route exact path='/science' element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={pagesize} country='in' category='science'/>}/>
            <Route exact path='/sports' element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={pagesize} country='in' category='sports'/>}/>
            <Route exact path='/technology' element={<News setprogress={setprogress} apikey={apikey} key="technology" pagesize={pagesize} country='in' category='technology'/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
