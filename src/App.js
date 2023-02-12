import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Surveys from "./pages/Surveys/Surveys";
import Details from "./pages/Details/Details";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Surveys/>}/>
            <Route path="/:code" element={<Details/>}/>
        </Routes>
    )
}

export default App
