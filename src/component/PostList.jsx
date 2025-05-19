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
        <div>PostList</div>
    )
}

export default PostList