import { collection, getFirestore, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from './Post'
import { db } from '../firebase'

function Posts() {
    const [realtimePosts, loading, error] = useCollection(
       query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
    
        
      );

        console.log(realtimePosts)

  return (
    <div>
        {realtimePosts?.docs.map((post) => (
            <Post 
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
            />
        ))}
    </div>

  )
}

export default Posts