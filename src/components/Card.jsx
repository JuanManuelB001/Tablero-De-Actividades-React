import "./card.css"

export function Card({props}){
    console.log(props);
    return(
        <div>

        <div className="card">
            {props.title}
        </div>
        <span className="span">Encargado: {props.title}</span>
        </div>
    );
}