import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config/firebase";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Classes from "./components/Classes";
import Resetpassword from "./components/Resetpassword";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f2b8" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/classes" component={Classes} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/reset-password" component={Resetpassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;