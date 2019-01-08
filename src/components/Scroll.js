import React from 'react'


const Scroll = (props) =>{
    return (
        <div style= {{overflowY: 'scroll', border: '', height: '700px'}} className= "tc">
                {props.children}
        </div>
    )
};

export default Scroll