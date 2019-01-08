import React from 'react';
import Card from './Card';


const CardList = ({cats}) => {
    const cardArray = cats.map(
        (user, index) => {
            return ( 
                <Card 
                    key={index}
                    id={cats[index].id} 
                    name={cats[index].name}
                    email={cats[index].email} 
                />
            );
        }
    )
    return (
        <div>
            {cardArray}
        </div>
    )
}
export default CardList;