import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../firebase'
import Post from '../post/post'
import './style.css'

export default function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
        });
      }, []);


    return (
        <div className='feed'>
            {/* <Post profileUrl='https://lh3.googleusercontent.com/a-/AOh14GigbWuor9LsP0sfVbMsnCrLuaKogUtm98DYf1o1=s96-c' 
            username='jayanth' 
            photoUrl='https://lh3.googleusercontent.com/a-/AOh14GigbWuor9LsP0sfVbMsnCrLuaKogUtm98DYf1o1=s96-c'
            username="Jayanth"
            caption = 'Hey! Good Day'
            />  */}

{posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            id={id}
            profileUrl={post.profileUrl}
            username={post.username}
            photoUrl={post.photoUrl}
            caption={post.caption}
            comments={post.comments}
          />
        );
      })}
        </div>
    )
}
