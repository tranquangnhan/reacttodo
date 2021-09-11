import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./style.scss";
AlbumList.propTypes = {
    albumList : PropTypes.array.isRequired
};

function AlbumList({albumList}) {
    
    return (
        <ul className="album-list"> 
            {albumList.map(item=>(
                <li key={item.id}>
                    <Album album={item}/>
                </li>
            ))
            }
        </ul>
    );
}

export default AlbumList;