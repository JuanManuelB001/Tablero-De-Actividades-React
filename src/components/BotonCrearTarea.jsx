import { Link } from "react-router-dom";
import "./botonCrearTarea.css"
export function BotonCrearTarea(){
    return(
        <div className="botonCrearTarea">
           <button className="botonAgregarTarea" >
             <Link  to={"/agregarTarea"} className="agregarTarea"  >
            crear tarea
            </Link>
           </button>
        </div>
    );
}