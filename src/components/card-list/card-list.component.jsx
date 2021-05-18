import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

function CardList(props) {

    return <div className="card-list">
        {
            props.monsters.map(monster => {
                console.log(monster)
                return (
                    <Card monster={monster} key={monster.id} />
                )
            })
        }
    </div>
}

export default CardList;