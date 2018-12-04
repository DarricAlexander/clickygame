import React from "react";
import "./Card.css";

const Card = props => (
    <div id="col" className="col-md-3">
        <div onClick={() => props.setClicked(props.id)} className="card">
            <div className="img-container">
                <img
                    id={props.id}
                    key={props.id}
                    alt={props.name}
                    src={props.image}
                    />
            </div>
        </div>
    </div>
)

export default Card;