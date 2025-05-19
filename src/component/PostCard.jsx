import React from 'react'

//PostCard è la singola card che mostra il post
const PostCard = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Category: </strong>{post.category}</p>
        </div>
    )
}

export default PostCard