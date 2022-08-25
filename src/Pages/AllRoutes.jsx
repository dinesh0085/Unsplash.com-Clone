import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/explore" element={<h1>explore</h1>}></Route>
            <Route path="/advertise" element={<h1>advertise</h1>}></Route>
            <Route path="/blog" element={<h1>blog</h1>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            
        </Routes>
    )
}

export default AllRoutes