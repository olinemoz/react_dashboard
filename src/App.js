import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Navigate to="/"/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="users">
                            <Route index element={<List/>}/>
                            <Route path=":userId" element={<Single/>}/>
                            <Route path="new" element={<New/>}/>
                        </Route>
                        <Route path="products">
                            <Route index element={<List/>}/>
                            <Route path=":productId" element={<Single/>}/>
                            <Route path="new" element={<New/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<h1>Error Page</h1>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
