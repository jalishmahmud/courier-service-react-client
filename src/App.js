import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import AddNewArea from "./pages/Dashboard/AddNewArea/AddNewArea";
import AddNewDistrict from "./pages/Dashboard/AddNewDistrict/AddNewDistrict";
import AddNewLocation from "./pages/Dashboard/AddNewLocation/AddNewLocation";
import AddNewUpojela from "./pages/Dashboard/AddNewUpojela/AddNewUpojela";
import CreateNewBranch from "./pages/Dashboard/CreateNewBranch/CreateNewBranch";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import PickupRequest from "./pages/Dashboard/PickupRequest/PickupRequest";
import Home from "./pages/Home/Home/Home";
import PersonalOrBusinessInfo from "./pages/Home/PersonalOrBusinessInfo/PersonalOrBusinessInfo";
import Footer from "./pages/Shared/Footer/Footer";
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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />}></Route>
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin />}></Route>
            <Route
              path="/dashboard/requestPickUp"
              element={<PickupRequest />}
            ></Route>

            <Route
              path="/dashboard/addNewArea"
              element={<AddNewArea />}
            ></Route>

            <Route
              path="/dashboard/addNewDistrict"
              element={<AddNewDistrict />}
            ></Route>
            <Route
              path="/dashboard/addNewUpojela"
              element={<AddNewUpojela />}
            ></Route>
            <Route
              path="/dashboard/addNewLocation"
              element={<AddNewLocation />}
            ></Route>
            <Route
              path="/dashboard/addNewLocation"
              element={<AddNewLocation />}
            ></Route>
            <Route
              path="/dashboard/createNewBranch"
              element={<CreateNewBranch />}
            ></Route>
          </Route>

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
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
