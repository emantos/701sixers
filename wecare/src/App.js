import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Home from './views/Home';



export default function App() {
  return (
    <Router>      
      <div>
        <div className="container" id="">
              
          <Route exact path="/" component={Home} />
          {/* <Route path="/form" component={Form} />
          <Route path="/event" component={Event} />
          <Route path="/auth" component={Auth} /> */}
        </div>

      </div>
    </Router>
  )
}
