import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import "./App.css"
import {
  TodoPage,
  CreatePage,
  TestPage,
  DonePage,
  ContactPage,
  HomePage,
  AuthPage,
  ProfilePage,
  EditPage,
  VerifyEmail
} from './container'
import { AuthApi, AuthProvider } from "./AuthApi"
import HashLoader from "react-spinners/HashLoader"

const MyApp = () => {
  const { loading } = useContext(AuthApi)

  return (
    <div className="App">
      {loading ?
        <div className="loading">
          <HashLoader className="loading" color={'#272727'} loading={loading} size={150} />
        </div>
        :
        <Router>
          <Routes />
        </Router>
      }

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
  const Auth = useContext(AuthApi)
  return (
    <Switch>
      <ProtectedRoute exact path="/" auth={Auth.auth} component={HomePage} />
      <ProtectedRoute exact path="/todo" auth={Auth.auth} component={TodoPage} />
      <ProtectedRoute exact path="/test" auth={Auth.auth} component={TestPage} />
      <ProtectedRoute exact path="/create" auth={Auth.auth} component={CreatePage} />
      <ProtectedRoute exact path="/done" auth={Auth.auth} component={DonePage} />
      <ProtectedRoute exact path="/contact" auth={Auth.auth} component={ContactPage} />
      <ProtectedRoute exact path="/profile" auth={Auth.auth} component={ProfilePage} />
      <ProtectedRoute exact path="/edit/:id" auth={Auth.auth} component={EditPage} />
      <ProtectedLogin exact path="/auth" auth={Auth.auth} component={AuthPage} />
      <ProtectedLogin exact path="/verify/:token" auth={Auth.auth} component={VerifyEmail} />
      <ProtectedLogin exact path="/verify" auth={Auth.auth} component={VerifyEmail} />
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
