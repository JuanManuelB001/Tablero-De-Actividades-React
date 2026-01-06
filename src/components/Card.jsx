import "./card.css"

export function Card({props}){

    return(
        <div>

        <div className="card">
            {props.title}
        </div>
        <span className="span">Encargado: {props.charge}</span>
        </div>
    );
}