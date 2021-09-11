import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    post: PropTypes.array
};
PostList.defaultProps={
    post:[]
}
function PostList(props) {
    const {posts} = props;
    console.log(posts)
    return (
       <ul className="post_list">
           {posts.map((item,idx)=>(
               <li key={idx}>{item.title }</li>
           ))}
       </ul>
    );
}

export default PostList;