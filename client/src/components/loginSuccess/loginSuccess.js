import React from 'react'
import './loginSuccess.css'
import { Link } from 'react-router-dom';
  const loginSuccess=()=>{
      return(
        <div>
            <div className="row sec-row">
            <div className="col-sm fis">
            <div className="card">
              <div className="card-body">
              CRIME
              <div>
              <Link to ="/list/crime">Click to read</Link>
              </div>
              </div>
            </div>
            </div>
            <div className="col-sm">
            <div className="card">
              <div className="card-body">
              EDUCATION
              <div>
              <Link to ="/list/education">Click to read</Link>
              </div>
              </div>
            </div>
            </div>
            <div className="col-sm">
            <div className="card">
              <div className="card-body">
              POLITICS
              <div>
              <Link to ="/list/politics">Click to read</Link>
              </div>
              </div>
            </div>
            </div>
            </div>
            <div className="row sec-row">
            <div className="col-sm fis">
            <div className="card">
              <div className="card-body">
              MUSIC
              <div>
              <Link to ="/list/music">Click to read</Link>
              </div>
              </div>
            </div>
            </div>
            <div className="col-sm">
            <div className="card">
              <div className="card-body">
              INTERNATIONAL
              <div>
              <Link to ="/list/international">Click to read</Link>
              </div>
              </div>
            </div>
            </div>
            <div className="col-sm">
            <div className="card">
              <div className="card-body">
              SPORTS
              <div>
              <Link to ="/list/sports">Click to read</Link>
              </div>
              </div>
            </div>
            </div>
            </div>
        </div>
      );
  }
  export default loginSuccess;