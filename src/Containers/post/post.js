import React, { useContext} from 'react'
import { Comment, CommentInput } from '../../Components'
 import {UserContext} from "../../Context/user"
import './style.css'
import { storage, db } from "../../firebase";

export default function Post(
    { profileUrl, username, id, photoUrl, caption, comments }

) {
     const [user, setUser] = useContext(UserContext).user
    // delete
    const deleteBtn = () => {
        // firstdelete the image from firebase storage
        // to do that get ref to the image file 
        var imageRef = storage.refFromURL(photoUrl);
    
        // delete the file
        imageRef
          .delete()
          .then(function () {
            console.log("delete successfull");
          })
          .catch(function (error) {
            console.log(`Error ${error}`);
          });
    
        //now delete the post from the db collection
        db.collection("posts").doc(id).delete()
          .then(function () {
            console.log("delete post info successfull");
          })
          .catch(function (error) {
            console.log(`Error post info delete ${error}`);
          });
      };





    return (
        <div className="post">
            <div className="post_header">
                <div className="post_header_details">
                    <img className="post_profilePic" src={profileUrl} />
                    <p style={{ marginLeft: '8px' }}>{username}</p>
                </div>

                <button className="post_delete" onClick={deleteBtn}>Delete</button>
            </div>
            <div className="post_center">
                <img className="post_photoUrl" src={photoUrl} />
            </div>

            <div>
            <p><span style={{fontWeight: "bolder", marginRight:"4px"}}>{username}</span>
                 {caption}</p>
            </div>
            
            
            {/* comments */}
            {comments ? (
                comments.map((comment) => (
                    <Comment username={comment.username} caption={comment.comment} />
                ))
            ) : (
                <></>
            )}

            {/* comment i/p */}
            {user ? <CommentInput comments={comments} id={id} /> : <></>}
            
        </div>
    )
}
