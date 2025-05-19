import { useState } from 'react'
import posts from '../data/posts'
import PostPage from './pages/PostPage'
import PostContext from './context/PostContext'


function App() {


  return (
    <>
      {/* `rendo disponibili i post via Context */}
      {/* `doppia grafa perchè sto passando un oggetto */}
      <PostContext.Provider value={{ posts }}>
        <PostPage />
      </PostContext.Provider>

    </>
  )
}

export default App
