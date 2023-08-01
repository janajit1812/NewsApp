
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route
// } from "react-router-dom";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  apiKey= process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0
  }

  setProgress = (prog) => {
    this.setState({ progress: prog })
  }

  render() {
    return (
      <div>
        {/* This is for the older version of react where switch can be used */}
        {/* <Router>
            <Navbar/>
              <Switch>
                <Route exact path="/"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
                <Route exact path="/general"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
                <Route exact path="/sports"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
                <Route exact path="/entertainment"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
                <Route exact path="/business"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
                <Route exact path="/health"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
                <Route exact path="/science"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
                <Route exact path="/technology"><News setprogress={this.setProgress} apiK apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
              </Switch>
          </Router> */}

        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route path="/Business" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route path="/Entertainment" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            {/* <Route path="/General" element={ <News setprogress={this.setProgress} apiK apiKey={this.apiKey} key='general'  pageSize={this.pageSize} country="in" category="general"/>}></Route> */}
            <Route path="/Health" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route path="/Science" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route path="/Sports" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route path="/Technology" element={<News setprogress={this.setProgress} apiKey={this.apiKey} key='technology}>' pageSize={this.pageSize} country="in" category="technology" />}></Route>

          </Routes>
        </BrowserRouter>


      </div>
    )
  }
}









