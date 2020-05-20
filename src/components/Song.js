import React from 'react';

const Song = (props) => {
    if (!props) return null;
    return (
        <>
        <br></br>
        <h3>{props.artist}</h3>
        <h4>{props.children}</h4>

<details>
<summary>This is how cool it gets</summary>
<br></br>
    <img src={props.image} alt="Ops"/>
</details>
        <hr/>
        </>
    )
}

export default Song;