import React from 'react';
import './Dog.css';

const Dog = (props) => (
    <div className="dog">
        <h3 className="dog__name">{props.name}</h3>
        <p className="dog__kennel">{props.kennel}</p>
        <div className="dog__stats">
            <p>Intelligence: <span>{props.intelligence}</span></p>
            <p>Friendliness: <span>{props.friendliness}</span></p>
            <p>Athleticism: <span>{props.athleticism}</span></p>
        </div>
    </div>
);

export default Dog;