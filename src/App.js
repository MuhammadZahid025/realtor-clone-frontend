import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import { Forgotpassword } from "./pages/Forgotpassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;
