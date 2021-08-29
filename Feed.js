import { Avatar } from '@material-ui/core'
import { AddPhotoAlternate, PlayArrow, Event, Assignment } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './feed.css'
import { db } from './firebase'
import Post from './Post'
import firebase from 'firebase'
import '../src/practice'

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
       db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
           setPosts(
               snapshot.docs.map((doc) => ({
                   id: doc.id,
                   data: doc.data(),
               }))
           )
       })
    }, [])   

    const sendPost = (e) => {
        console.log("reached")
        e.preventDefault()
        db.collection("posts").add(
            {
                name: 'kazi rezwan',
                message: input,
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        setInput('')

    }

    return (
        <div className="feed">
            <div className="messageBox">
         <div className="feedTop">
             <Avatar className="messageBox__avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQGSj8hsbZOkrQ/profile-displayphoto-shrink_100_100/0/1628101634053?e=1634169600&v=beta&t=y7qVnWUHKjnK-2HHh6EbouXYVHUzXB--ZTJY74axxeE" />
             <form onSubmit={sendPost}>
             <input type="text" 
             placeholder="Start a post" 
             value={input}
             onChange={(e) => setInput(e.currentTarget.value)}
             />
            
            </form>
        </div>
         <div className="feedBottom">
             <div className="iconBox">
                 <AddPhotoAlternate className="addPhotoIcon" />
                 Photo
             </div>
             <div className="iconBox">
                 <PlayArrow className="playVideoIcon" />
                 Video
             </div>
             <div className="iconBox">
                 <Event className="eventIcon" />
                 Event
             </div>
             <div className="iconBox">
                 <Assignment className="articleIcon" />
                 Write Article
             </div>
         </div>
         </div>

        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
           
            />
        ))}

        <Post name="kazi" />
         
        </div>
    )
}

export default Feed
