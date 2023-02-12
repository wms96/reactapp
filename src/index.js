import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Surveys from "./pages/Surveys/Surveys";
import {Details} from "@mui/icons-material";
ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Surveys/>} />
                <Route path="/about" element={<Details/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
