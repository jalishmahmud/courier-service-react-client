import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import PersonalOrBusinessInfo from "./pages/Home/PersonalOrBusinessInfo/PersonalOrBusinessInfo";
import Login from "./pages/Shared/Login/Login";
import Navigation from "./pages/Shared/Navigation/Navigation";
import PrivateRoute from "./pages/Shared/PrivateRoute/PrivateRoute";
import Register from "./pages/Shared/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/register/personalInfo"
            element={
              <PrivateRoute>
                <PersonalOrBusinessInfo />
              </PrivateRoute>
            }
          ></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
