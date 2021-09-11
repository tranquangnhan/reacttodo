import React, { useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {
    const [count,setCount] = useState(0);
    return (
        <div>
             <h3>{count}</h3>
            <button onClick={()=>{setCount(x=>++x)}}>inscrease</button>
        </div>
    );
}

export default Counter;