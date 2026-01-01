import { Link } from "react-router-dom";

export function BotonCrearTarea(){
    return(
        <div>
            <Link  to={"/agregarTarea"}  >
            crear tarea
            </Link>
        </div>
    );
}