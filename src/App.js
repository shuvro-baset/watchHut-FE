
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import WatchHut from './pages/WatchHut/WatchHut';
import WatchOrder from './pages/WatchOrder/WatchOrder';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
function App() {
  return (
    <>
      <AuthProvider>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          
          <Route path="/watches">
            <WatchHut></WatchHut>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/watch/:watchId">
            <WatchOrder></WatchOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
