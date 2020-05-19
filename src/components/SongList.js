import React from 'react';
import Song from './Song';


const SongList = (props) => {
    const songList = props.songs.map (
        song => {
            return (
            <Song artist={song['im:artist'].label}
            key={song.id.attributes['im:id']}>
                {song['im:name'].label}
            </Song>
         )
     });
     
    
    return (
        <>
        <h2>SONG LIST</h2>
        {songList}
        </>
      )

      
}

export default SongList;