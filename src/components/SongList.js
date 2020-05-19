import React from 'react';
import Song from './Song';


const SongList = (props) => {
    const songList = props.songs.map (
        (song, index) => {
            return ( 
            <Song artist={song['im:artist'].label}
            key={song.id.attributes['im:id']}>
                {index+1 + ". " + song['im:name'].label}
            </Song> 
         )
     });
    
    return (
        <>
        <h2 class="zoom">SONG LIST</h2>
        {songList}
        </>
      )

      
}

export default SongList;