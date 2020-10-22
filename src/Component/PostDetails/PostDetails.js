import React from 'react';

const PostDetails = (props) => {

    const {id, userId, title, body} = props.clickedPost;
    //const {postId, commentId, name, email, commentBody} = props.comments;
    return (
        <div>
            <h1>This is post details</h1>
            <hr/>
            <h2>{title}</h2>
            <p>{body}</p>
            
            
        </div>
    );
};

export default PostDetails;