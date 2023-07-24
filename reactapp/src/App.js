import React from 'react'
import  ReactDOM  from 'react-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Signup from './Components/signup'
import Course from './Components/Courses'
import Certification from './Components/Certification'
import Sessions from './Components/Sessions'
import Blogs from './Components/Blogs'
import Navbar from './Components/Homepage'
import Materials from './Components/Materials'
import Logout from './Components/Logout'
import Edit from './Components/Registration'
import Profile from './Components/Profile'
import All from './Components/All'
import published from './Components/published'
import Draft from './Components/Draft'
import CourseDec from './Components/Enroll'
import Checkouting from './Components/checkout'
import Person from './Components/perl'
import Program from './Components/See'
import FeedForm from './Components/feedback'

function App(){

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/'Component={LoginForm}/>
      <Route exact path='/signup'Component={Signup}/>
      <Route exact path='/Home'Component={Navbar}/>
      {/* <Route exact path ='/sessions'Component={Sessions}/> */}
      <Route exact path='/course'Component={Course}/>
      <Route exact path='/certification'Component={Certification}/>
      <Route exact path='/blogs'Component={Blogs}/>
      <Route exact path='/profile'Component={Profile}/>
      <Route exact path ='/materials'Component={Materials}/>
      <Route exact path ='/logout'Component={Logout}/>
      <Route exact path ='/edit'Component={Edit}/>
      <Route exact path ='/all'Component={All}/>
      <Route exact path ='/published'Component={published}/>
      {/* <Route exact path ='/draft'Component={Draft}/> */}
      <Route exact path='/declaration' Component={CourseDec}/>
      <Route exact path ='/payment' Component={Checkouting}/>
      <Route exact path ='/perl'Component={Person}/>
      <Route exact path ='/c++'Component={Program}/>
      <Route exact path='/Feed'Component={FeedForm}/>
    </Routes>
  </Router>,
  document.getElementById('root')

);
}
export default App;
