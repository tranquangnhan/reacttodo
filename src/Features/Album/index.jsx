import React from 'react';
import AlbumList from './Components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name:"Nhạc Hoa Thịnh Hành",
            thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/5/4/3/1543855b8a018abb6d6cd2a95a9b5960.jpg"
        },
        {
            id:2,
            name:"Nhạc Việt Trịnh Công Sơn",
            thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/c/f/5/ccf5205ff5771e8017830b0a21015add.jpg"
        },
        {
            id:3,
            name:"Nhạc dân gian",
            thumbnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/3/e/9/a3e994d71dbddf26dba54cd92bd746a2.jpg"
        },

    ]
    return (
        <AlbumList albumList={albumList}/>
    );
}

export default AlbumFeature;