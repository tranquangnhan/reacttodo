import React, { useState } from 'react';

ColorBox.propTypes={}

function ColorBox(props) {
    const [color, setColor] = useState('white');
    return (
        <div>
            <h3>{color}</h3>
            <button onClick={() => setColor('black')}>Black</button>
            <button onClick={() => setColor('white')}>White</button>
        </div>
    );
}

export default ColorBox;