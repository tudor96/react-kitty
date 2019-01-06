import React from 'react';

const Card = ({name, email, id}) =>{
    return (
        <div className="tc bg-navy dib br3 pa3 ma2 grow sans-serif bw3 shadow-5 white-90">
            <img alt='robots' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;