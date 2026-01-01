import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { CrearTarea } from "../components/CrearTarea";
export function MyRouter(){
    return(
       <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>} />
            <Route exact path="/agregarTarea"  element={<CrearTarea/>}/>
        </Routes>
       </BrowserRouter>
    );
}