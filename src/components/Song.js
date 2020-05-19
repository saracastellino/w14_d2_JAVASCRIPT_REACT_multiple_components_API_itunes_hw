import React from 'react';

const Song = (props) => {
    if (!props) return null;
    return (
        <>
        <h3>{props.artist}</h3>
        <h4>{props.children}</h4>
        <hr/>
        </>
    )
}

export default Song;