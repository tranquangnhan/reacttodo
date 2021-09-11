import React, { useState, useEffect } from 'react';
import TodoForm from '../../Components/TodoForm';
import TodoList from '../../Components/TodoList';
import { Button } from '@material-ui/core';
import './style.scss';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
ListPage.propTypes = {};

function ListPage(props) {
  function createCounter() {
    function getTodo() {
      return JSON.parse(window.localStorage.getItem('todo')) ?? [];
    }
    function setTodoList(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    function clearTodoList() {
      window.localStorage.clear('todo');
    }
    return { getTodo, setTodoList, clearTodoList };
  }

  const TodoLocal = createCounter();

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(TodoLocal.getTodo());
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.search || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.search || 'all');
  }, [location.search]);

  const handleShowAllClick = () => {
    const queryParams = { search: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  
  const handleShowNewClick = () => {
    const queryParams = { search: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    const queryParams = { search: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);

    TodoLocal.setTodoList('todo', newTodoList);
  };

  const renderedTodoList = todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: !(todoList[0]) ? 1 : ++todoList[todoList.length - 1].id,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    TodoLocal.setTodoList('todo', newTodoList);
  }

  function clearTodo() {
    TodoLocal.clearTodoList();
    const newTodoList = TodoLocal.getTodo();
    setTodoList(newTodoList);
  }

  return (
    <div className="box_todo">
      <h3>What todo ?</h3>

      <div>
        <Button variant="contained" className="clear-todo" onClick={clearTodo}>
          Clear Todo
        </Button>
      </div>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <Button variant="contained" color="primary" onClick={handleShowAllClick}>
          Show All
        </Button>
        <Button variant="contained" className="ml-2" color="secondary" onClick={handleShowNewClick}>
          Show New
        </Button>
        <Button variant="contained" className="ml-2" onClick={handleShowCompletedClick}>
          Show Completed
        </Button>
      </div>
    </div>
  );
}

export default ListPage;
