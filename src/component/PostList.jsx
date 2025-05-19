import React from 'react'
//importo il contesto
//utilizzo il contesto
import { useContext } from 'react'
import PostContext from '../context/PostContext'
import PostCard from './PostCard'

const PostList = () => {

    //useContext mi fa leggere i dati del contesto
    const posts = useContext(PostContext)

    return (
        <div>
            {/* `tramite id recupero la card per ogni post */}
            {/* `con map mi ciclo l'array post generandone una copia  */}
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList