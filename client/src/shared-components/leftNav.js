import React,{Component} from 'react'
import Dashboard from '../components/Dashboard'
import {Route} from 'react-router-dom'
import './leftNav.css'
const LeftNav=()=>{
    return(
       <div>
          <div>
        <nav className = "pp navbar bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
             <button className="btn btn-link">General News</button>
          </li>
          <li class="nav-item">
             <button className="btn btn-link">Crime News</button>
          </li>
          <li class="nav-item">
             <button className="btn btn-link">Sports News</button>
          </li>
        </ul>
        </nav>
        </div>
        <div>
        <Route path="/Top/Left" component={Dashboard}/>
        </div>
        </div>
    );

}
export default LeftNav;