import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Layout>
                    <Route exact path="/" component={<Home/>} />
                    <Route exact path="/login" component={<Login/>} />
                    <Route exact path="recoverypassword" component={<RecoveryPassword/>} />
                    <Route component={<NotFound/>}/>
                </Layout>
            </Routes>
        </BrowserRouter>
    );
}

export default App;