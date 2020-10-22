import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';
import PostDetails from '../PostDetails/PostDetails';

const Home = () => {

    const [post, setPost] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])

    const [clickedPost, setClickedPost] = useState({});
    const [comment, setComment] = useState([]);

    const handleAddPost = (post) => {
        //console.log(post);
        setClickedPost(post);

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.userId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }


    
    return (
        <div>
            {
                post.map(post => <Post handleAddPost={handleAddPost} post={post}></Post>)
            }
            <PostDetails clickedPost={clickedPost}></PostDetails>
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Home;