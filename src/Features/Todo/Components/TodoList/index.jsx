import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

TodoList.propTypes = {
     todoList: PropTypes.array,
     onTodoClick: PropTypes.func
};
TodoList.defaultProps = {
    todoList:[],
    onTodoClick:null
}


function TodoList({todoList,onTodoClick}) {

    const handleTodoClick= (item,idx)=>{
        if(!onTodoClick) return;

        onTodoClick(item,idx);
    }

    return ( 
        <div className="todo-list">
            <List component="nav" aria-label="secondary mailbox folders">
                {todoList.map((item,idx)=>(
                    <ListItem button >
                        <ListItemText 
                        key={item.id} 
                        className={classnames({
                            'todo-item':true,
                            completed: item.status === 'completed'
                        })}
                        onClick={()=>handleTodoClick(item,idx)} 
                        primary={item.title} 
                        />
                    </ListItem>
                ))}
              
            </List>
            </div>
    );
}
 
export default TodoList;