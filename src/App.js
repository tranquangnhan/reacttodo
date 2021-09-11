import { useEffect, useState } from 'react';
import './App.scss';
import AlbumFeature from './Features/Album';
import ColorBox from './Features/Color';
import Counter from './Features/Count';
import PostList from './Features/PostList';
import TodoFeatures from './Features/Todo';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './components/NotFound';
import categoryApi from "./Api/categoryApi";
import productsApi from "./Api/productApi";
import Clock from './Features/Clock';


function App() {
  useEffect(()=>{
    const fetchProducts = async()=>{
      const params = {
        _limit:10
      }
      const productList = await productsApi.getAll(params)
      console.log(productList)
    };

    fetchProducts();
  },[])


  const [todoList, setTodoList] = useState([
    { id: 1, title: 'i love you' },
    { id: 2, title: 'i love you 2' },
    { id: 3, title: 'i love you 3' },
  ]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://localhost:4000/films';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        setPostList(responseJSON);
      } catch (error) {
        console.log('failed to fetch post list', error.message);
      }
    }
    fetchPostList();
  }, []);

 const [showClock,setShowClock] =  useState(true)


  return (
    <div className="app">
      <TodoFeatures/>
    {/* 
      <p>
        <NavLink to="/todos" activeClassName="active-class">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeClassName="active-class">
          Albums
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/nhan" to="/todos" />
        <Route path="/" component={TodoFeatures} exact />
        <Route path="/todos" component={TodoFeatures} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch> */}
      {/* <Route path="/post"  component={PostList} /> */}
      {/* <AlbumFeature/> */}
      {/* <ColorBox/> */}
      {/* <Counter/> */}
      {/* <PostList posts={postList}/> */}
      {/* {showClock && <Clock/>}
      <div onClick={()=>setShowClock(!showClock)}>Show Hide Clock</div> */}
    </div>
  );
}

export default App;
