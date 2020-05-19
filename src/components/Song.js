import React from 'react';

const Song = (props) => {
    if (!props) return null;
    return (
 
        <h3>{props.children}</h3>

    )
}

export default Song;