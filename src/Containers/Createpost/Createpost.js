import React from 'react'
import { SignIn } from '../../Components'
import { useState, useContext } from "react";
import { UserContext } from '../../Context/user';
// import CommentInput from "../../components/comment-input/";
import './style.css'
// import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import LinkedCameraTwoToneIcon from '@material-ui/icons/LinkedCameraTwoTone';


import makeid from "../../helper/helper";

import firebase from 'firebase';
import { storage, db } from "../../firebase";

export default function Createpost() {

    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState('');

    const [image, setImage] = useState(null);
     const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
          var selectedImgsrc = URL.createObjectURL(e.target.files[0]);
          var imagePreview = document.getElementById("image-preview");
          imagePreview.src = selectedImgsrc;
          imagePreview.style.display = "block";
        }
      };

      const handleUpload = () => {
        if (image) {
          var imageName = makeid(10);
          const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);
    
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // progress function 1%,2%...
    
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
    
              setProgress(progress);
            },
            (error) => {
              console.log(error);
            },
            () => {
              // get download url and upload the post info
    
              storage
                .ref("images")
                .child(`${imageName}.jpg`)
                .getDownloadURL()
                .then((imageUrl) => {
                  db.collection("posts").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    photoUrl: imageUrl,
                    username: user.email.replace("@gmail.com", ""),
                    profileUrl: user.photoURL,
                  });
                });
    
              setCaption("");
              setProgress(0);
              setImage(null);
    
              document.getElementById("image-preview").style.display = "none";
            }
          );
        }
      };

    return (


        <div className="createpost">
            {
                user ? (
                    <div className="textarea_login">
                        <h1>Create Post</h1>
                        <div className="textarea_login_center">
                            <textarea className='createpost_textarea' rows='3' placeholder="Start Typing..." value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            ></textarea>

                            <div className='createpost_imagePreview'>
                                <img id="image-preview" alt="" onClick={handleChange}>
                                </img>
                            </div>

                        </div>
                        <div className="buttons">
                            <div className='createpost_image'>
                                <label htmlFor="fileInput">
                                    <LinkedCameraTwoToneIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
                                </label>
                                <input id='fileInput' type="File" accept="image/*" onChange={handleChange}></input>
                            </div>
                            <div >
                                <button className='createpost_button' onClick={handleUpload} style={{ color: caption ? 'black' : 'lightgray' }}>
                                {`Post ${progress != 0 ? progress : ""}`}
                                    </button>
                            </div>
                        </div>


                    </div>
                )
                    : (<div>
                        <SignIn />
                        <p>To post & comment</p> </div>)
            }


        </div>
    )
}