import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};
TodoForm.defaultPrpps = {
    onSubmit:null
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value,setValue] = useState('');

    function handleValueChange(e){
        setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!onSubmit)return;
        const formValue = {
            title:value,
            status:'new'
        };
        onSubmit(formValue);
        // reset form

        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input type="text"
             value={value} 
             onChange={handleValueChange} placeholder="Nhập công việc"/>
        </form>
    );
}

export default TodoForm;



// import React from 'react';
// import PropTypes from 'prop-types';

// TodoForm.propTypes = {
//     onSubmit:PropTypes.func
// };

// function TodoForm(props) {
//     const {onSubmit} = props;
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         onSubmit(e.target.todo.value);
//     }


//     return (
//         <form method="post" onSubmit={(e)=>handleSubmit(e)}>
//             <input type="text" name="todo" />
//             <button type="submit"> Submit</button>
//         </form>
//     );
// }

// export default TodoForm;