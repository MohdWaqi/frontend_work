import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Register from "./pages/Register/Register";
import LogIn from "./pages/Login/Login";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
       <Route element={<PrivateRoute allowedRoles={[5150]} />}>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        </Route> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
