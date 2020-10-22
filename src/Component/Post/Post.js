import React from 'react';

const Post = (props) => {
    const { id, userId, title, body } = props.post;
    const handleAddPost = props.handleAddPost;
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => handleAddPost(props.post)}>Read more</button>
        </div>
    );
};

export default Post;