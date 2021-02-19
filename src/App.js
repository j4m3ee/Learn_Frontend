import React from 'react'
import TestApi from "./TestApi"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import TodoPage from './container/todoPage'
import CreatePage from './container/createPage'
import TestPage from './container/testPage'
import Navbar from './components/navbar'
import "./App.css"
import DonePage from './container/donePage'
import ContactPage from './container/contactPage'

function App() {
  return (
    <div className="App">
      {/* <TestApi></TestApi> */}
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={TodoPage}/>
          <Route exact path="/test" component={TestPage}/>
          <Route exact path="/create" component={CreatePage}/>
          <Route exact path="/done" component={DonePage}/>
          <Route exact path="/contact" component={ContactPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
