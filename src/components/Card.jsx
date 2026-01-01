import "./card.css"

export function Card(props){
    return(
        <div>

        <div className="card">
            {props.children}
        </div>
        <span className="span">span</span>
        </div>
    );
}