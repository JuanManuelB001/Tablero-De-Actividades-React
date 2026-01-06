import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { CrearTarea } from "../components/CrearTarea";
import { useState } from "react";
import mockData from "../data/mockData";
export function MyRouter(){
    const [data, setData] = useState(mockData);
    return(
       <BrowserRouter>
        <Routes>
            
            <Route exact path="/" element={<App/>} />
            <Route exact path="/agregarTarea"  element={<CrearTarea />}/>
        </Routes>
       </BrowserRouter>
    );
}