import React, { useState, useEffect, Component, useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from 'react-router-dom'
import "./App.css"
import {
  TodoPage,
  CreatePage,
  TestPage,
  DonePage,
  ContactPage,
  HomePage,
  AuthPage
} from './container'
import { AuthApi, AuthProvider } from "./AuthApi"

const MyApp = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

const App = () => {
  return (
    <AuthProvider>
      <MyApp />
    </AuthProvider>
  )

}

const Routes = () => {
  const Auth = React.useContext(AuthApi)
  return (
    <Switch>
      <ProtectedRoute exact path="/" auth={Auth.auth} component={HomePage} />
      <ProtectedRoute exact path="/todo" auth={Auth.auth} component={TodoPage} />
      <ProtectedRoute exact path="/test" auth={Auth.auth} component={TestPage} />
      <ProtectedRoute exact path="/create" auth={Auth.auth} component={CreatePage} />
      <ProtectedRoute exact path="/done" auth={Auth.auth} component={DonePage} />
      <ProtectedRoute exact path="/contact" auth={Auth.auth} component={ContactPage} />
      <ProtectedLogin exact path="/auth" auth={Auth.auth} component={AuthPage} />
      <Redirect to="/" />
    </Switch>
  )
}

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => auth ? (
        <Component />
      ) : (
        <Redirect to="/auth" />
      )}
    />
  )
}

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => !auth ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )}
    />
  )
}

export default App;
